import {NgModule} from '@angular/core';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {OrderRoutingModule} from './order-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent],
  providers: [],
})
export class OrderModule {
}
