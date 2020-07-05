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

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getAllTask().subscribe((tasks: Task[]) => {
       tasks.forEach((task)=> {
                      task.status= this.getStatus(task); 
                      this.tasks.push(task)});
    });
    console.log(this.tasks);
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(res => {
      this.tasks = this.tasks.filter(prod => prod.id !== task.id);
    });
  }
  getStatus(task:Task): string{
    
    switch(task.status) {
     case '1': 
            return 'por empezar';
     case '2':
            return 'en progreso';
     case '3':
            return 'completada';
     default:
           return  'error';
    }

  }

}
