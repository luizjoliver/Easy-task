import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';


import { MOCK_USERS } from './constants/users';
import { NgFor, NgIf } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = MOCK_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelecteUser(id: string) {
    this.selectedUserId = id;
  }
}
