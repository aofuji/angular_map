import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FiltrosComponent } from '../components/filtros/filtros.component';
import { ListaOcorrenciasComponent } from '../components/lista-ocorrencias/lista-ocorrencias.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { ocorrenciasActions } from '../store/ocorrencias.actions';
import {
  Ocorrencia,
  OcorrenciaStatus,
  OcorrenciaTipo
} from '../store/ocorrencias.models';
import {
  selectError,
  selectFiltroStatus,
  selectFiltroTipo,
  selectLoading,
  selectOcorrenciaSelecionadaId,
  selectOcorrenciasFiltradas
} from '../store/ocorrencias.selectors';

@Component({
  selector: 'app-mapa-urbano-page',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    FiltrosComponent,
    ListaOcorrenciasComponent,
    MapaComponent
  ],
  templateUrl: './mapa-urbano-page.component.html',
  styleUrl: './mapa-urbano-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaUrbanoPageComponent implements OnInit {
  private readonly store = inject(Store);

  readonly ocorrencias$: Observable<readonly Ocorrencia[]> = this.store.select(
    selectOcorrenciasFiltradas
  );
  readonly filtroTipo$ = this.store.select(selectFiltroTipo);
  readonly filtroStatus$ = this.store.select(selectFiltroStatus);
  readonly loading$ = this.store.select(selectLoading);
  readonly error$ = this.store.select(selectError);
  readonly ocorrenciaSelecionadaId$ = this.store.select(selectOcorrenciaSelecionadaId);

  ngOnInit(): void {
    this.store.dispatch(ocorrenciasActions.loadOcorrencias());
  }

  setFiltroTipo(tipo: OcorrenciaTipo | null): void {
    this.store.dispatch(ocorrenciasActions.setFiltroTipo({ tipo }));
  }

  setFiltroStatus(status: OcorrenciaStatus | null): void {
    this.store.dispatch(ocorrenciasActions.setFiltroStatus({ status }));
  }

  selectOcorrencia(id: number): void {
    this.store.dispatch(ocorrenciasActions.selectOcorrencia({ id }));
  }

  clearFiltros(): void {
    this.store.dispatch(ocorrenciasActions.clearFiltros());
  }
}
