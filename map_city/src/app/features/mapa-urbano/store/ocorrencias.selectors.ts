import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OcorrenciasState } from './ocorrencias.models';

export const selectOcorrenciasState =
  createFeatureSelector<OcorrenciasState>('ocorrencias');

export const selectAllOcorrencias = createSelector(
  selectOcorrenciasState,
  (state) => state.ocorrencias
);

export const selectOcorrenciasFiltradas = createSelector(
  selectAllOcorrencias,
  selectOcorrenciasState,
  (ocorrencias, state) =>
    ocorrencias.filter(
      (ocorrencia) =>
        (!state.filtroTipo || ocorrencia.tipo === state.filtroTipo) &&
        (!state.filtroStatus || ocorrencia.status === state.filtroStatus)
    )
);

export const selectLoading = createSelector(
  selectOcorrenciasState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectOcorrenciasState,
  (state) => state.error
);

export const selectFiltroTipo = createSelector(
  selectOcorrenciasState,
  (state) => state.filtroTipo
);

export const selectFiltroStatus = createSelector(
  selectOcorrenciasState,
  (state) => state.filtroStatus
);

export const selectOcorrenciaSelecionada = createSelector(
  selectOcorrenciasFiltradas,
  selectOcorrenciasState,
  (ocorrencias, state) =>
    ocorrencias.find((ocorrencia) => ocorrencia.id === state.ocorrenciaSelecionadaId) ?? null
);

export const selectOcorrenciaSelecionadaId = createSelector(
  selectOcorrenciasState,
  (state) => state.ocorrenciaSelecionadaId
);
