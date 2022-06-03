import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form-edit',
  templateUrl: './cliente-form-edit.component.html',
  styleUrls: ['./cliente-form-edit.component.sass']
})
export class ClienteFormEditComponent implements OnInit {
  clienteFormEdt: FormGroup;
  submittingForm: boolean = false;

  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder

  ) { }

  url: any = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  ngOnInit(): void {
    this.buildClienteFormEdt()
    this.loadCliente()
  }
  submitForm() {
    this.submittingForm = true;




  }

  private buildClienteFormEdt() {

    this.clienteFormEdt = this.formBuilder.group({
      id: [null],
      first_name: [null],
      last_name: [null],
      email: [null],
      avatar: [null],

    });
  }

  private loadCliente() {


    this.route.paramMap.pipe(
      switchMap(params => this.clienteService.getById(+params.get("id")))
    )
      .subscribe(
        (cliente: any) => {
          this.cliente = cliente.data;
          this.clienteFormEdt.patchValue(cliente.data) // binds loaded contato data to ContatoForm

        },
        error => alert('Ocorreu um erro no servidor, tente mais tarde.')
      )


  }

}
