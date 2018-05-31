import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NumberToArrayPipe} from './number-to-array.pipe';

const pipes = [
  NumberToArrayPipe
];

@NgModule({
  imports: [CommonModule],
  exports: [pipes],
  declarations: [pipes],
})
export class PipesModule {
}
