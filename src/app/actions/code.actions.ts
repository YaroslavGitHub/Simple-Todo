import { createAction, props } from '@ngrx/store';

export const loadCodes = createAction(
  '[Code] Load Codes'
);

export const loadCodesSuccess = createAction(
  '[Code] Load Codes Success',
  props<{ data: any }>()
);

export const loadCodesFailure = createAction(
  '[Code] Load Codes Failure',
  props<{ error: any }>()
);
