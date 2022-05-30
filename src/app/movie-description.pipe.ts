import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDescription'
})
export class MovieDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, value.indexOf('.') + 1);
  }

}
