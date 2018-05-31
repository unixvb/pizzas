import { Component, OnInit } from '@angular/core';
import {config} from '../../../../config';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  availablePieces = 6;
  maxAvailablePieces = config.max_available_pieces;

  constructor() { }

  ngOnInit() {
  }

}
