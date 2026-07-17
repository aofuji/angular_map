import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Ocorrencia } from '../../store/ocorrencias.models';

@Component({
  selector: 'app-lista-ocorrencias',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './lista-ocorrencias.component.html',
  styleUrl: './lista-ocorrencias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaOcorrenciasComponent {
  @Input({ required: true }) ocorrencias: readonly Ocorrencia[] = [];
  @Input() ocorrenciaSelecionadaId: number | null = null;
  @Output() readonly selectOcorrencia = new EventEmitter<number>();

  trackById(_: number, ocorrencia: Ocorrencia): number {
    return ocorrencia.id;
  }
}
