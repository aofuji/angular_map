import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IncidentsMockService } from '../../../core/services/incidents-mock.service';
import { incidentsActions } from './incidents.actions';

export const incidentsEffects = createEffect(
  (actions$ = inject(Actions), incidentsService = inject(IncidentsMockService)) => {
    return actions$.pipe(
      ofType(incidentsActions.loadIncidents),
      switchMap(() =>
        incidentsService.loadIncidents().pipe(
          map((incidents) => incidentsActions.loadIncidentsSuccess({ incidents })),
          catchError(() =>
            of(
              incidentsActions.loadIncidentsFailure({
                error: 'Could not load incidents.',
              }),
            ),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
