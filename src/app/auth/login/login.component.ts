import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account/shared/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  submittingForm: boolean = false;


  loginForm: FormGroup = this.fb.group({
    email: [''],
    password:[''],
   
  })


  constructor(
    private accountService: AccountService,
    private router: Router,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){


    const credentials =  this.loginForm.value;;
    this.accountService.login(credentials)
      .subscribe(
        (usuario) =>{
          //console.log(usuario),
          this.actionsForSucess(usuario)
        },
          (error) =>{
            console.log(error);
            this.actionsForError(error);
      
  
          }  
      )
  }
  private actionsForSucess(usuario: any){
    alert("Login realizado com sucesso!");
   
    setTimeout(() => {
      this.router.navigateByUrl("/clientes")
    }
    , 1000);
  
  }
  
  private actionsForError(error){
      
  
    this.submittingForm = false;
  
    if(error.status === 400)
      alert("Missing password");
  
  
  }

}
