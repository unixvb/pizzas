import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {config} from '@config';

import {OrderComponent} from './order/order.component';
import {OrderRoutingModule} from './order-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {reducers} from './reducers';
import {OrderEffect} from './effects/order.effect';


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

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([
      OrderEffect
    ])
  ],
  declarations: [OrderComponent],
  providers: [],
})
export class OrderModule {
}
