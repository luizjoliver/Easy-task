import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newAddTask } from '../task/task.model';



@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})

export class AddTaskComponent {
  @Output() cancelAddTask = new EventEmitter<void>();
  @Output() add = new EventEmitter<newAddTask>()
  // ex com signal
  // enteredTitle = signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onCancel() {
    this.cancelAddTask.emit();
  }

  onSubmit(){
    this.add.emit({
      dueDate:this.enteredDate,
      summary:this.enteredSummary,
      title:this.enteredTitle
    })
  }
}
