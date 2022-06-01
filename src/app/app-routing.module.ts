import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormEditComponent } from './components/clientes/cliente-form-edit/cliente-form-edit.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { HomeComponent } from './components/layout/home/home.component';


const routes: Routes = [
  {
    path:'' , 
    component: HomeComponent,
    children: [
      {path:"clientes", component: ClienteListComponent},
      {path:"clientes/new", component:ClienteFormComponent},
      {path: 'clientes/:id/edit', component: ClienteFormEditComponent},

    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
