import { AddressTypeEnum } from "../enum/address-type.enum";

export const addressTypeDescriptionMap: { [key in AddressTypeEnum]: string } = {
    [AddressTypeEnum.RESIDENTIAL]: 'Residencial',
    [AddressTypeEnum.WORK]: 'Trabalho',
    [AddressTypeEnum.ALTERNATIVE]: 'Alternativo'
  };