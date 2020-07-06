import { Component, OnInit } from '@angular/core';

import Task from 'src/app/models/task.model';
import { TaskService } from '../services/task.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  titlesTable: string[] = ['#', 'título', 'descripción', 'estado', 'usarioAsignado', 'Acciones'];
  tasks: Task[];
  tasksAux: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {


    this.taskService.getAllTask().subscribe((tasks: any) => {
      console.log("lista de tasks : "+JSON.stringify( tasks));
      this.tasks= tasks;
    });
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(res => {
      this.tasks = this.tasks.filter(prod => prod.id !== task.id);
    });
  }

}
