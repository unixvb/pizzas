import {Action} from '@ngrx/store';

export enum OrderActionTypes {
  EAT_PIECE = '[OrderActionTypes] Eat piece',
  COOK_PIECE = '[OrderActionTypes] Cook piece',
  SET_AVAILABLE_PIECES = '[OrderActionTypes] Set available pieces'
}

export class EatPiece implements Action {
  readonly type = OrderActionTypes.EAT_PIECE;
}

export class CookPiece implements Action {
  readonly type = OrderActionTypes.COOK_PIECE;
}

export class SetAvailablePieces implements Action {
  readonly type = OrderActionTypes.SET_AVAILABLE_PIECES;

  constructor(public payload: number) {
  }
}

export type Actions =
  | EatPiece
  | CookPiece
  | SetAvailablePieces;
