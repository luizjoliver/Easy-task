import { Component, EventEmitter, Input, Output } from '@angular/core';
import  { type TypeTask  } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() selectedUserId!:string;
  @Input({required:true}) task!:TypeTask
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }


}
