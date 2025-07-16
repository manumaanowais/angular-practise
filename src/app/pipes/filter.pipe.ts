import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: string[], searchedValue: string): string[] {
    if(!items || !searchedValue) {
      return items;
    } else {
      return items.filter(item => item.toLowerCase().includes(searchedValue.toLowerCase()));
    }
  }

}
