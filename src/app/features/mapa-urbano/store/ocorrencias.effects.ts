import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { OcorrenciasMockService } from '../../../core/services/ocorrencias-mock.service';
import { ocorrenciasActions } from './ocorrencias.actions';

export const ocorrenciasEffects = createEffect(
  (
    actions$ = inject(Actions),
    ocorrenciasService = inject(OcorrenciasMockService)
  ) => {
    return actions$.pipe(
      ofType(ocorrenciasActions.loadOcorrencias),
      switchMap(() =>
        ocorrenciasService.loadOcorrencias().pipe(
          map((ocorrencias) => ocorrenciasActions.loadOcorrenciasSuccess({ ocorrencias })),
          catchError(() =>
            of(
              ocorrenciasActions.loadOcorrenciasFailure({
                error: 'Nao foi possivel carregar as ocorrencias.'
              })
            )
          )
        )
      )
    );
  },
  { functional: true }
);
