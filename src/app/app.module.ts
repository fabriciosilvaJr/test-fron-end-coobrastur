import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormEditComponent } from './components/clientes/cliente-form-edit/cliente-form-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteFormComponent,
    HeaderComponent,
    HomeComponent,
    ClienteFormEditComponent,
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
