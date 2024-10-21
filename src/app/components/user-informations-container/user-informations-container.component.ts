import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { tick } from '@angular/core/testing';
import { take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrl: './user-informations-container.component.scss'
})
export class UserInformationsContainerComponent extends UserFormController implements OnInit, OnChanges {
  currentTabIndex: number = 0;
  countriesList: CountriesList = [];

  private readonly _countriesService = inject(CountriesService);

  @Input({ required: true }) isInEditMode: boolean = false;
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnInit(): void {
    this.getCountriesList();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;



    if (HAS_USER_SELECTED) {
      this.fulfillUserForm(this.userSelected);
    }
  }
  private getCountriesList() {
    this._countriesService.getCoutries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
      this.countriesList = countriesList
    });
  }
}

