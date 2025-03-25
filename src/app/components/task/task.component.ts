import { Component, inject, Input } from '@angular/core';
import { type TypeTask } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() selectedUserId!:string;
  @Input({required:true}) task!:TypeTask

  private tasksService = inject(TasksService)
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }


}
