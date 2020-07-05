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


    this.taskService.getAllTask().subscribe((tasks: Task[]) => {
      this.tasks= tasks;
    });
  /*   new Promise((resolver, rechazar) => {
      this.taskService.getAllTask().subscribe((tasks: Task[]) => {
        this.tasksAux= tasks;
        resolver();
     });  
     console.log("promesa");
    
  }).catch(() => {
   
    this.tasksAux.forEach((task)=> {
      console.log("catch"+JSON.stringify(task));
      this.tasks.push(task)});
      console.log("catch");
    console.log(this.tasks);
  }).then(() => {
    console.log("catch"+JSON.stringify(this.tasksAux));
    this.tasksAux.forEach((task)=> {
      task.status= this.getStatus(task); 
      this.tasks.push(task)});
      console.log("then");
    console.log(this.tasks);
  });
   */     
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(res => {
      this.tasks = this.tasks.filter(prod => prod.id !== task.id);
    });
  }

}
