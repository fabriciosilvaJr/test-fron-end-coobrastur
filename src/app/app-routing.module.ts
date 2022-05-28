import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
      {path: 'clientes/:id/edit', component: ClienteFormComponent},

    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
