import { PhoneTypeEnun } from "../enum/phone-type.enum";

export const phoneTypeDescritonMap: {[key in PhoneTypeEnun]: string} = {
    [PhoneTypeEnun.RESIDENTIAL]: 'Residencial',
    [PhoneTypeEnun.MOBILE]: 'Celular',
    [PhoneTypeEnun.EMERGENCY]: 'Emergêncial'
  };