import { createReducer, on } from '@ngrx/store';
import { ocorrenciasActions } from './ocorrencias.actions';
import { OcorrenciasState } from './ocorrencias.models';

export const initialState: OcorrenciasState = {
  ocorrencias: [],
  loading: false,
  error: null,
  filtroTipo: null,
  filtroStatus: null,
  ocorrenciaSelecionadaId: null
};

export const ocorrenciasReducer = createReducer(
  initialState,
  on(ocorrenciasActions.loadOcorrencias, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ocorrenciasActions.loadOcorrenciasSuccess, (state, { ocorrencias }) => ({
    ...state,
    ocorrencias,
    loading: false
  })),
  on(ocorrenciasActions.loadOcorrenciasFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ocorrenciasActions.setFiltroTipo, (state, { tipo }) => ({
    ...state,
    filtroTipo: tipo
  })),
  on(ocorrenciasActions.setFiltroStatus, (state, { status }) => ({
    ...state,
    filtroStatus: status
  })),
  on(ocorrenciasActions.selectOcorrencia, (state, { id }) => ({
    ...state,
    ocorrenciaSelecionadaId: id
  })),
  on(ocorrenciasActions.clearFiltros, (state) => ({
    ...state,
    filtroTipo: null,
    filtroStatus: null
  }))
);
