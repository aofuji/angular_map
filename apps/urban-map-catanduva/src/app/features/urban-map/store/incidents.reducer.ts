import { createReducer, on } from '@ngrx/store';
import { incidentsActions } from './incidents.actions';
import { IncidentsState } from './incidents.models';

export const initialState: IncidentsState = {
  incidents: [],
  loading: false,
  error: null,
  typeFilter: null,
  statusFilter: null,
  selectedIncidentId: null,
};

export const incidentsReducer = createReducer(
  initialState,
  on(incidentsActions.loadIncidents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(incidentsActions.loadIncidentsSuccess, (state, { incidents }) => ({
    ...state,
    incidents,
    loading: false,
  })),
  on(incidentsActions.loadIncidentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(incidentsActions.setTypeFilter, (state, { incidentType }) => ({
    ...state,
    typeFilter: incidentType,
  })),
  on(incidentsActions.setStatusFilter, (state, { status }) => ({
    ...state,
    statusFilter: status,
  })),
  on(incidentsActions.selectIncident, (state, { id }) => ({
    ...state,
    selectedIncidentId: id,
  })),
  on(incidentsActions.clearFilters, (state) => ({
    ...state,
    typeFilter: null,
    statusFilter: null,
  })),
);
