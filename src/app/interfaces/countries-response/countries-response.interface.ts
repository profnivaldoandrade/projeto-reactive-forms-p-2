import { CountriesList } from "../../types/countries-list";
import { IBaseCountriesRespose } from "../base-countries-response.interface";

export interface ICountriesRespose extends IBaseCountriesRespose{
    data: CountriesList;
}