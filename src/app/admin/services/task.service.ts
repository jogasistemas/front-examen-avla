import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import Task from '../../models/task.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class TaskService {
  readonly API = 'tasks';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllTask() {
    const url = `${this.BASE_URL}/${this.API}/`;

    return this.http.get(url);
  }

  getTaskByid(id: number) {
    const url = `${this.BASE_URL}/${this.API}/${id}/`;

    return this.http.get(url);
  }

  createTask(Task: Task) {
    const url = `${this.BASE_URL}/${this.API}/`;

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
}
