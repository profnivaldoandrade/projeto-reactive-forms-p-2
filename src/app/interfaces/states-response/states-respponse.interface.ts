import { IBaseCountriesRespose } from "../base-countries-response.interface";
import { IStateResponseData } from "./state-response-data.interface";

export interface IStatesResponse extends IBaseCountriesRespose{
    data: IStateResponseData;
}

