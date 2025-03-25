import { Injectable } from "@angular/core";
import { dummyTasks } from "../../constants/users";
import { newAddTask } from "../task/task.model";

@Injectable({
  providedIn:'root'
})
export class TasksService {
  private tasks = dummyTasks


  constructor(){
    const tasks = localStorage.getItem('tasks') as string

    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
  }


  getUserTasks(userId:string){

    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(task:newAddTask, userId:string){
    this.tasks.push({
      id:new Date().getTime().toString(),
      title:task.title,
      summary:task.summary,
      dueDate:task.dueDate,
      userId:userId
    })
    this.saveTasks()
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
    this.saveTasks()
  }

  private saveTasks (){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))

  }
}
