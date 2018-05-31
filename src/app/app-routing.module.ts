import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'order',
        loadChildren: './modules/+order/order.module#OrderModule'
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
