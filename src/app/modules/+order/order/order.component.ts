import {Component} from '@angular/core';
import {config} from '../../../../config';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  availablePieces = 6;

  constructor() {
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
