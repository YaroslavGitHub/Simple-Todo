import { Action, createReducer, on } from '@ngrx/store';


export const codesFeatureKey = 'codes';

export interface State {
  codes: Array<String>

}

export const initialState: State = {
  codes: []

};


export const reducer = createReducer(
  initialState,

);

