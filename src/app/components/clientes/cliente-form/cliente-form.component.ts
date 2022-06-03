import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.sass']
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  submittingForm: boolean = false;

  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildClienteForm();
  }

  submitForm() {
    this.submittingForm = true;


    this.createCliente()


  }
  private buildClienteForm() {

    this.clienteForm = this.formBuilder.group({
      name: [null],
      job: [null],

    });
  }



  private createCliente() {

    const cliente: Cliente = Object.assign(new Cliente(), this.clienteForm.value);

    this.clienteService.create(cliente)
      .subscribe(
        cliente => alert("Cliente cadastrado com sucesso"),
        error => alert("Erro ao cadastrar cliente")
      )

  }


}
