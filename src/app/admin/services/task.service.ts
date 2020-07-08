import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import Task from '../../models/task.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { StatusTask } from '../config/statusTask.enum';

@Injectable()
export class TaskService {
  readonly API = 'tasks';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllTask() {
    const url = `${this.BASE_URL}/${this.API}/`;
    
   /*  return this.http.get(url); */
      return this.http.get(url).pipe(map((tasks:any)=>{
        return tasks.map(task => {
          task.statusName= this.getStatus(task);
        return task })
    }))
  }

  getTaskByid(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}/`;

    return this.http.get(url);
  }

  createTask(Task: Task) {
    const url = `${this.BASE_URL}/${this.API}/`;
   console.log("task"+JSON.stringify(Task));
    return this.http.post(url, Task);
  }

  updateTask(Task: Task) {
    const url = `${this.BASE_URL}/${this.API}/${Task.id}`;

    return this.http.put(url, Task);
  }

  deleteTask(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}`;

    return this.http.delete(url);
  }

  getStatus(task:Task): string{
     console.log('getStatus' + task.status);
    switch(task.status) {
     case 1: 
            return StatusTask.TODO;
     case 2:
            return StatusTask.PROGRESS;
     case 3:
            return StatusTask.TODO;
     default:
           return  StatusTask.ERROR;
    }
  }

}