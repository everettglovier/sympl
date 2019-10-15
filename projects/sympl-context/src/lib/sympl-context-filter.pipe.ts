import { Pipe, PipeTransform } from '@angular/core';
import {SuperDropdownOptionInterface} from '../../../../../HeadCount.org Intranet/headcount/src/modules/super-dropdown/dropdown.interface';

@Pipe({
  name: 'superDropdownFilter',
  pure: false
})
export class SuperDropdownFilterPipe implements PipeTransform {
  transform(items: SuperDropdownOptionInterface[], filter?: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.label.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}
