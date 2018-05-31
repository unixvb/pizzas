import {NgModule} from '@angular/core';
import {PipesModule} from '../pipes/pipes.module';
import {CommonModule} from '@angular/common';

const modules = [
  CommonModule,
  PipesModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class SharedModule {
}
