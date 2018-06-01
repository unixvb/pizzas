import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {Observable} from 'rxjs/index';
import {map, takeUntil, tap} from 'rxjs/internal/operators';
import {config} from '@config';

import {CookPiece, CookPieceFailed, EatPiece, EatPieceFailed, OrderActionTypes, SetAvailablePieces} from '../actions/order.action';
import {Common} from '../../../common/common';

import * as orderReducer from '../reducers';

@Injectable()
export class OrderEffect extends Common {
  availablePieces: number;

  @Effect()
  cookPeace$: Observable<Action> = this.actions$.pipe(
    ofType<CookPiece>(OrderActionTypes.COOK_PIECE),
    map(() => {
      if (this.availablePieces < config.max_available_pieces) {
        return new SetAvailablePieces(this.availablePieces + 1);
      }
      return new CookPieceFailed();
    })
  );

  @Effect()
  eatPeace$: Observable<Action> = this.actions$.pipe(
    ofType<EatPiece>(OrderActionTypes.EAT_PIECE),
    map(() => {
      if (this.availablePieces > 0) {
        return new SetAvailablePieces(this.availablePieces - 1);
      }
      return new EatPieceFailed();
    })
  );

  constructor(private actions$: Actions,
              private store: Store<orderReducer.State>) {
    super();
    this.store
      .pipe(
        select(orderReducer.selectOrderAvailablePieces),
        tap((availablePieces) => this.availablePieces = availablePieces),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }
}
