import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {takeUntil, tap} from 'rxjs/internal/operators';
import {config} from '@config';

import {CookPiece, EatPiece} from '../actions/order.action';
import {Common} from '../../../common/common';

import * as orderReducer from '../reducers';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent extends Common implements OnInit {
  availablePieces: number;

  constructor(private store: Store<orderReducer.State>) {
    super();
  }

  ngOnInit(): void {
    this.store
      .pipe(
        select(orderReducer.selectOrderAvailablePieces),
        tap((availablePieces) => this.availablePieces = availablePieces),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  public cookSlice() {
    this.store.dispatch(new CookPiece());
  }

  public eatSlice() {
    this.store.dispatch(new EatPiece());
  }

}
