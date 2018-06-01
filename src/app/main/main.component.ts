import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as rootReducer from '../store/reducers';
import {SetName} from '../store/actions/user.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: Store<rootReducer.State>) {
    // this.store.dispatch(new SetName('newfdasfad'));
  }

  ngOnInit() {
  }

}
