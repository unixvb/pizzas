import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrderComponent} from './order/order.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
