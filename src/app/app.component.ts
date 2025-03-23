import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";

import { TaskComponent } from "./components/task/task.component";
import { MOCK_USERS } from './constants/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {

  users = MOCK_USERS
  selectedUserId = "u2"

  get selectedUser (){

    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelecteUser(id:string){

    this.selectedUserId = id

  }
}
