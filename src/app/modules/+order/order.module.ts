import {NgModule} from '@angular/core';
import {OrderComponent} from './order/order.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {OrderRoutingModule} from './order-routing.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent],
  providers: [],
})
export class OrderModule {
}
