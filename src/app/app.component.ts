import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { take } from 'rxjs';
import { UsersListRespose } from './types/users-list-response';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;
  isInEditMode: boolean = false;


  usersList: UsersListRespose = [];
  
  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ) { }

  ngOnInit() {
    // this._countriesService.getCoutries().subscribe((countriesResponse)=>{
    //   console.log('countriesResponse', countriesResponse)
    // })
    // this._statesService.getStates('Brazil').subscribe((statesResponse)=>{
    //   console.log('statesResponse', statesResponse)
    // })
    // this._citiesService.getCities('Brazil','São Paulo').subscribe((citiesResponse)=>{
    //     console.log('citiesResponse', citiesResponse)
    // })
    this._usersService.getUsers().pipe(take(1))
      .subscribe((usersListRespose) =>
        this.usersList = usersListRespose
      )
  }
  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex]

    if(userFound){
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);

    }

  }
  onCancelButton(){
    this.isInEditMode = false;
  }
  onEditButton(){
    this.isInEditMode = true;
  }
}

