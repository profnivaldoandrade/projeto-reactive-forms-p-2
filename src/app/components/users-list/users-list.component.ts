import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListRespose } from '../../types/users-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  userSelectedIndex: number | undefined;
  
  @Input({ required: true }) usersList: UsersListRespose = [];
  
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>();

  onUserSelected(userIndex: number) {
      this.userSelectedIndex = userIndex;
      this.onUserSelectedEmitt.emit(userIndex);
    }
}
