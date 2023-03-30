import { Component } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent {

  title = 'ex-gestao-de-colaboradores';

  titulo: string = "Listagem de colaboradores";

  colaborador: c = {
    id: 7,
    nome: "Nathan Carlos Exercício",
    salario: 4500,
    cargo: "Dev PI"
  }

}

interface c {
  id: number;
  nome: string;
  salario: number;
  cargo: string;
}
