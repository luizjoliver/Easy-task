import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newAddTask } from '../task/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>();

  // ex com signal
  // enteredTitle = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)


  onCancel() {
    this.close.emit();
  }

  onSubmit() {
  this.tasksService.addTask({
    title:this.enteredTitle,
    dueDate:this.enteredDate,
    summary:this.enteredSummary,
  },this.userId)

  this.close.emit()
  }
}
