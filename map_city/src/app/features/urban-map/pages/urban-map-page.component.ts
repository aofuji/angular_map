import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FiltersComponent } from '../components/filters/filters.component';
import { IncidentListComponent } from '../components/incident-list/incident-list.component';
import { MapComponent } from '../components/map/map.component';
import { incidentsActions } from '../store/incidents.actions';
import {
  Incident,
  IncidentStatus,
  IncidentType
} from '../store/incidents.models';
import {
  selectError,
  selectStatusFilter,
  selectTypeFilter,
  selectLoading,
  selectSelectedIncidentId,
  selectFilteredIncidents
} from '../store/incidents.selectors';

@Component({
  selector: 'app-urban-map-page',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    FiltersComponent,
    IncidentListComponent,
    MapComponent
  ],
  templateUrl: './urban-map-page.component.html',
  styleUrl: './urban-map-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UrbanMapPageComponent implements OnInit {
  private readonly store = inject(Store);

  readonly incidents$: Observable<readonly Incident[]> = this.store.select(
    selectFilteredIncidents
  );
  readonly typeFilter$ = this.store.select(selectTypeFilter);
  readonly statusFilter$ = this.store.select(selectStatusFilter);
  readonly loading$ = this.store.select(selectLoading);
  readonly error$ = this.store.select(selectError);
  readonly selectedIncidentId$ = this.store.select(selectSelectedIncidentId);

  ngOnInit(): void {
    this.store.dispatch(incidentsActions.loadIncidents());
  }

  setTypeFilter(incidentType: IncidentType | null): void {
    this.store.dispatch(incidentsActions.setTypeFilter({ incidentType }));
  }

  setStatusFilter(status: IncidentStatus | null): void {
    this.store.dispatch(incidentsActions.setStatusFilter({ status }));
  }

  selectIncident(id: number): void {
    this.store.dispatch(incidentsActions.selectIncident({ id }));
  }

  clearFilters(): void {
    this.store.dispatch(incidentsActions.clearFilters());
  }
}
