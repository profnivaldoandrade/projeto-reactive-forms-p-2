import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../types/phone-list';
import { PhoneTypeEnun } from '../../../../enum/phone-type.enum';
import { IPhone } from '../../../../interfaces/user/phone.interface';
import { IPhoneToDisplay } from '../../../../interfaces/phone-to-display.interface';
import { phoneTypeDescritonMap } from '../../../../utils/phone-type-descriton-map';



@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss'
})
export class PhoneListComponent implements OnChanges{
  phoneListDisplay: IPhoneToDisplay[] = [];
  @Input({required: true}) userPhoneList: PhoneList | undefined= [];
  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);
    if(PHONE_LIST_LOADED){
      this.preparePhoneListToDisplay();
    }
  }
  preparePhoneListToDisplay() {
    this.phoneListDisplay = [];

    (Object.keys(phoneTypeDescritonMap)).map(Number).forEach((phoneType: number)=>{
      const phoneFound = this.userPhoneList?.find((userPhone: IPhone)=>userPhone.type === phoneType);

      this.phoneListDisplay.push({
        type: phoneTypeDescritonMap[phoneType as PhoneTypeEnun],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      })

    })

  }
  formatPhoneNumber(phone: IPhone) {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`
  }
  
}
