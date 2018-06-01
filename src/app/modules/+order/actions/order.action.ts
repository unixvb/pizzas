import {Action} from '@ngrx/store';

export enum OrderActionTypes {
  EAT_PIECE = '[OrderActionTypes] Eat piece',
  EAT_PIECE_FAILED = '[OrderActionTypes] Eat piece failed',
  COOK_PIECE = '[OrderActionTypes] Cook piece',
  COOK_PIECE_FAILED = '[OrderActionTypes] Cook piece failed',
  SET_AVAILABLE_PIECES = '[OrderActionTypes] Set available pieces'
}

export class EatPiece implements Action {
  readonly type = OrderActionTypes.EAT_PIECE;
}

export class EatPieceFailed implements Action {
  readonly type = OrderActionTypes.EAT_PIECE_FAILED;
}

export class CookPiece implements Action {
  readonly type = OrderActionTypes.COOK_PIECE;
}

export class CookPieceFailed implements Action {
  readonly type = OrderActionTypes.COOK_PIECE_FAILED;
}

export class SetAvailablePieces implements Action {
  readonly type = OrderActionTypes.SET_AVAILABLE_PIECES;

  constructor(public payload: number) {
  }
}

export type Actions =
  | EatPiece
  | EatPieceFailed
  | CookPiece
  | CookPieceFailed
  | SetAvailablePieces;
