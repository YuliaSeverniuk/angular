import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanString',
})
export class BooleanStringPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? 'New' : '';
  }
}
