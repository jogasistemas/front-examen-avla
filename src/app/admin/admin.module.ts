import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TaskService } from './services/task.service';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TaskFormComponent } from './common/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TasksComponent,
    TaskEditComponent,
    TaskNewComponent,
    AdminComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    UserService
  ]
})
export class AdminModule { }
