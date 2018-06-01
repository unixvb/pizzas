import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {OrderComponent} from './order/order.component';
import {OrderRoutingModule} from './order-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {config} from '../../../config';
import {reducers} from './reducers';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    OrderRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature(config.stores.order, reducers),
  ],
  declarations: [OrderComponent],
  providers: [],
})
export class OrderModule {
}
