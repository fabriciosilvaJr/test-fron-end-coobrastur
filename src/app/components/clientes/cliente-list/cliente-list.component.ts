import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.sass']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      (clientes:any) => this.clientes = clientes.data,
       error => alert ("Erro ao carregar a lista"),
     )
  }

}
