import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    // loadChildren: './admin/admin.module#AdminModule'
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule )
  },
  {
    path: '**',
    redirectTo: ''
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
