import { Component, OnInit } from '@angular/core';
import { FormLocaisDeDoacao, LocaisDeDoacao } from './model/locais-de-doacao';

@Component({
  selector: 'app-locais-de-doacao',
  templateUrl: './locais-de-doacao.component.html',
  styleUrls: ['./locais-de-doacao.component.scss']
})
export class LocaisDeDoacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  locaisDeDoacao: LocaisDeDoacao[] = [{
    "hemocentro": "Posto Clínicas",
    "endereco": "Av. Enéas Carvalho de Aguiar, 155 1º andar. Cerqueira César/SP",
    "cep":"05403-000",
    "distancia":"",
    "tipoa":"10%",
    "tipob":"20%",
    "tipoab":"30%",
    "tipoo":"40%"
  },
  {
    "hemocentro": "Posto Dante Pazzanese",
    "endereco": "Av. Doutor Dante Pazzanese, 500. Ibirapuera/SP",
    "cep":"04012-180",
    "distancia":"",
    "tipoa":"50%",
    "tipob":"20%",
    "tipoab":"25%",
    "tipoo":"30%"
  },
  {
    "hemocentro": "Posto Mandaqui",
    "endereco": "Rua Voluntários da Pátria, 4.227. Mandaqui/SP",
    "cep":"02401-400",
    "distancia":"",
    "tipoa":"67%",
    "tipob":"38%",
    "tipoab":"29%",
    "tipoo":"45%"
  },
  {
    "hemocentro": "Posto Regional de Osasco",
    "endereco": "Rua Ari Barroso, 355 - Presidente Altino Osasco/SP",
    "cep":"06216-240",
    "distancia":"",
    "tipoa":"80%",
    "tipob":"5%",
    "tipoab":"9%",
    "tipoo":"43%"
  },
  {
    "hemocentro": "Posto Barueri",
    "endereco": "Rua Angela Mirella, 354 térreo - Jardim Barueri. Barueri/SP",
    "cep":"06411-330",
    "distancia":"",
    "tipoa":"70%",
    "tipob":"50%",
    "tipoab":"30%",
    "tipoo":"10%"
  },
  {
    "hemocentro": "Posto Stella Maris",
    "endereco": "Rua Maria Cândida Pereira, 568 - Itapegica Guarulhos/SP",
    "cep":"07041-020",
    "distancia":"",
    "tipoa":"15%",
    "tipob":"30%",
    "tipoab":"35%",
    "tipoo":"5%"
  }
  ];

  form: FormLocaisDeDoacao = {
    "cep": "",
    "tiposanguineo":""
  }

  hemocentro = "";
  tipoa = "";
  tipob = "";
  tipoab = "";
  tipoo = "";

  endereco = "";

  setBancoDeSangue(local: LocaisDeDoacao) {
    this.hemocentro = local.hemocentro;
    this.tipoa = local.tipoa;
    this.tipob = local.tipob;
    this.tipoab = local.tipoab;
    this.tipoo = local.tipoo;
  }

  getHemocentros() {
    return this.locaisDeDoacao;
  }

  pesquisar() {

  }

  

}
