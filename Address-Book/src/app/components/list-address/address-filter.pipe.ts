import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/model/Address';

@Pipe({
  name: 'addressFilter'
})
export class AddressFilterPipe implements PipeTransform {

  transform(value: Address[], filterText?: string): Address[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((a:Address)=> a.name.toLocaleLowerCase()
    .indexOf(filterText)!==-1 || a.lastName.toLocaleLowerCase()
    .indexOf(filterText)!==-1 || String(a.phoneNumber).indexOf(filterText)!==-1):value;
}
}
