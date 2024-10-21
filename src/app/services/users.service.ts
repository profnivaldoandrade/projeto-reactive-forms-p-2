import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaritalStatusEnum } from "../enum/marital-status.enum";
import { PhoneTypeEnun } from "../enum/phone-type.enum";
import { AddressTypeEnum } from "../enum/address-type.enum";
import { UsersListRespose } from "../types/users-list-response";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private readonly usersList: UsersListRespose = [
        {
            name: 'Fulano',
            email: 'fulano@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.SINGLE, // -> Estado Civil // -> Solteiro
            monthlyIncome: 5000, // -> Renda Mensal
            birthDate: '25/02/1991',
            phoneList: [
                {
                    type: PhoneTypeEnun.RESIDENTIAL, // -> Residencial
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '1234-5678', // -> Número
                },
                {
                    type: PhoneTypeEnun.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-2222', // -> Número
                },
                {
                     type: PhoneTypeEnun.EMERGENCY, // -> Emergência
                     areaCode: '11', // -> DDD
                     internationalCode: '+55', // -> DDI
                     number: '93333-4444', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.RESIDENTIAL, // -> Residencial
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                     type: AddressTypeEnum.WORK, // -> Trabalho
                     street: 'Avenida de Tal',
                     complement: 'Próximo ao centro comercial',
                     country: 'Brazil',
                     state: 'São Paulo',
                     city: 'Santos',
                },
                {
                    type: AddressTypeEnum.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.MARRIED, // -> Estado Civil // -> Casada
            monthlyIncome: 6000, // -> Renda Mensal
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneTypeEnun.EMERGENCY, // -> Emergência
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.WORK, // -> Trabalho
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                }
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.SINGLE, // -> Estado Civil // -> Divorciado
            monthlyIncome: 7000, // -> Renda Mensal
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type: PhoneTypeEnun.MOBILE, // -> Celular
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AddressTypeEnum.ALTERNATIVE, // -> Alternativo
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        }
    ];
    getUsers(): Observable<UsersListRespose>{
        return new Observable<UsersListRespose>((observer)=>{
            setTimeout(()=>{
                observer.next(this.usersList);
            }, 500);
        })
    }
}