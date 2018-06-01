import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {config} from '@config';

import * as orderReducer from '../reducers';
import {SetAvailablePieces} from '../actions/order.action';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  availablePieces = 6;

  constructor(private store: Store<orderReducer.State>) {
    this.store.dispatch(new SetAvailablePieces(777));
  }

  public cookSlice() {
    if (this.availablePieces < config.max_available_pieces) {
      this.availablePieces++;
    }
  }

  public eatSlice() {
    if (this.availablePieces > 0) {
      this.availablePieces--;
    }
  }

}
