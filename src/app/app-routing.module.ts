import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './pages/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';


const routes: Routes = [
  {path:"clientes", component: ClienteListComponent},
  {path:"clientes/new", component:ClienteFormComponent},
  {path: 'clientes/:id/edit', component: ClienteFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
