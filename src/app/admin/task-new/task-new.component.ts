import { Component, OnInit } from '@angular/core';
import Task from 'src/app/models/task.model';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task: Task;
  users: User[];
  constructor(
    private router: Router,
    private taskService: TaskService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.task = {
      id: 0,
      title: '',
      description: '',
      status: 0,
      userId: 0,
      user:{
        userId: 0,
        names:'seleccionar Usuario',
        lastName:''
      }
    };

    this.userService.getAllUser().subscribe((Users: User[]) => {
      console.log('userssss :'+ JSON.stringify(Users));
      this.users = Users;
    });

  }

  onSaveTask(task: Task) {
    console.log('task '+ JSON.stringify(task));
    this.taskService.createTask(task).subscribe(res => {
      console.log('entro');
      this.router.navigate(['/admin/tasks']);
    });
  }

}
