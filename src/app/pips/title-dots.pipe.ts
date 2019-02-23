import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleDots'
})
export class TitleDotsPipe implements PipeTransform {

  transform(value: any, count?: number): any {

    return value.substr(0, count) + '...' ;

  }

}
