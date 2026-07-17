import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncidentsState } from './incidents.models';

export const selectIncidentsState =
  createFeatureSelector<IncidentsState>('incidents');

export const selectAllIncidents = createSelector(
  selectIncidentsState,
  (state) => state.incidents
);

export const selectFilteredIncidents = createSelector(
  selectAllIncidents,
  selectIncidentsState,
  (incidents, state) =>
    incidents.filter(
      (incident) =>
        (!state.typeFilter || incident.type === state.typeFilter) &&
        (!state.statusFilter || incident.status === state.statusFilter)
    )
);

export const selectLoading = createSelector(
  selectIncidentsState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectIncidentsState,
  (state) => state.error
);

export const selectTypeFilter = createSelector(
  selectIncidentsState,
  (state) => state.typeFilter
);

export const selectStatusFilter = createSelector(
  selectIncidentsState,
  (state) => state.statusFilter
);

export const selectSelectedIncident = createSelector(
  selectFilteredIncidents,
  selectIncidentsState,
  (incidents, state) =>
    incidents.find((incident) => incident.id === state.selectedIncidentId) ?? null
);

export const selectSelectedIncidentId = createSelector(
  selectIncidentsState,
  (state) => state.selectedIncidentId
);
