import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Incident, IncidentStatus, IncidentType } from './incidents.models';

export const incidentsActions = createActionGroup({
  source: 'Incidents',
  events: {
    loadIncidents: emptyProps(),
    loadIncidentsSuccess: props<{ incidents: Incident[] }>(),
    loadIncidentsFailure: props<{ error: string }>(),
    setTypeFilter: props<{ incidentType: IncidentType | null }>(),
    setStatusFilter: props<{ status: IncidentStatus | null }>(),
    selectIncident: props<{ id: number }>(),
    clearFilters: emptyProps(),
  },
});
