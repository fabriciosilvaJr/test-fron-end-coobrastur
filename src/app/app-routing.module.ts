import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ClienteFormEditComponent } from './components/clientes/cliente-form-edit/cliente-form-edit.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './auth/account/shared/auth.guard';


const routes: Routes = [
  {
    path:'' , 
    component: HomeComponent,
    children: [
      {path:"clientes", component: ClienteListComponent},
      {path:"clientes/new", component:ClienteFormComponent},
      {path: 'clientes/:id/edit', component: ClienteFormEditComponent},

    ],
    canActivate: [AuthGuard]

  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path:'', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
