import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MOCK_USERS } from '../../constants/users';
import { type TypeUser } from './user.mode';
import { CardComponent } from "../../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: TypeUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>()
  // avatar = input.required<string>()
  // name = input.required<string>()

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => '../assets/users/' + this.selectedUser().avatar)

  // imagePath = computed(() => '../assets/users/' + this.avatar())

  get imagePath() {
    return '../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    this.select.emit(this.user.id);
  }
}
