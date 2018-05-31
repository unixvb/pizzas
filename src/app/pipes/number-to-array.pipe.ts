import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberToArray'
})

export class NumberToArrayPipe implements PipeTransform {
  transform(length: number): number[] {
    return Array.from({length: length}, (value, index) => index);
  }
}
