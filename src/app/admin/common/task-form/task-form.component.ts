import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Location } from '@angular/common';

import Task from '../../../models/task.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm;
  isLoading: boolean = false;

  @Input() model: Task;
  @Input() modelUsers: User[];
  @Output() completedform: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private location: Location) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(this.model.title || ''),
      description: new FormControl(this.model.description  || ''),
      status: new FormControl(this.model.status  || ''),
      userId: new FormControl(this.model.userId  || 0)
    });
  }
   
  onBack() {
    this.location.back();
  }

  onSubmit(e) {
    e.preventDefault();
    const { value, valid } = this.taskForm;
    this.isLoading = true;

    if (valid) {
      if (this.model.id) {
        value.id = this.model.id;
      }
      this.completedform.emit(value);
    }
  }

}
