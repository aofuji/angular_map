import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  Ocorrencia,
  OcorrenciaStatus,
  OcorrenciaTipo
} from './ocorrencias.models';

export const ocorrenciasActions = createActionGroup({
  source: 'Ocorrencias',
  events: {
    loadOcorrencias: emptyProps(),
    loadOcorrenciasSuccess: props<{ ocorrencias: Ocorrencia[] }>(),
    loadOcorrenciasFailure: props<{ error: string }>(),
    setFiltroTipo: props<{ tipo: OcorrenciaTipo | null }>(),
    setFiltroStatus: props<{ status: OcorrenciaStatus | null }>(),
    selectOcorrencia: props<{ id: number }>(),
    clearFiltros: emptyProps()
  }
});
