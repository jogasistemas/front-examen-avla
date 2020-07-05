import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TaskService } from '../services/task.service';

import Task from '../../models/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.taskService.getTaskByid(+params.get('id'))
        .subscribe((task: Task) => this.task =  task);
    });
  }

  onSaveTask(task: Task) {
    this.taskService.updateTask(task).subscribe(res => {
      console.log('update : '+ JSON.stringify(task));
      this.router.navigate(['/admin']);
    });
  }

}
