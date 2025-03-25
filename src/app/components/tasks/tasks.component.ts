import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { dummyTasks } from '../../constants/users';
import { AddTaskComponent } from "../add-task/add-task.component";
import { newAddTask } from '../task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string
  isAddingTask:boolean = false
  tasks = dummyTasks


  get selectedUserTask(){

    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id:string){
     this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCancelAddTask(){
    this.isAddingTask = false
  }

  onAddTask(task:newAddTask){

    this.tasks.push({
      id:new Date().getTime().toString(),
      title:task.title,
      summary:task.summary,
      dueDate:task.dueDate,
      userId:this.userId
    })

    this.isAddingTask = false
  }
}
