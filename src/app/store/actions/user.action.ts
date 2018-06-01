import {Action} from '@ngrx/store';

export enum UserActionTypes {
  SET_NAME = '[UserActionTypes] Set name'
}

export class SetName implements Action {
  readonly type = UserActionTypes.SET_NAME;

  constructor(public payload: string) {
  }
}

export type Actions =
  | SetName;
