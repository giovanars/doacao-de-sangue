import { Component, OnInit } from '@angular/core';

import { SejaUmDoadorService } from './service/seja-um-doador.service'
import { FormSejaUmDoador } from './model/seja-um-doador';


@Component({
  selector: 'app-seja-um-doador',
  templateUrl: './seja-um-doador.component.html',
  styleUrls: ['./seja-um-doador.component.scss']
})
export class SejaUmDoadorComponent implements OnInit {

  constructor(private sejaUmDoadorService: SejaUmDoadorService) { }

  ngOnInit(): void {
  }

  form: FormSejaUmDoador = {
    "nome": "",
    "idade": 16,
    "sexo": "",
    "tipoSanguineo": "",
    "cep": "",
    "uf": "",
    "cidade": "",
    "bairro": "",
    "rua": "",
    "numero": "",
    "complemento": ""
  }

  buscarCep(event: any) {
    if (event.target.value.trim().length >= 8) {
      this.sejaUmDoadorService.getCep(event.target.value.trim()).subscribe(
        (res) => {
          this.form.uf = res.uf;
          this.form.cidade = res.localidade;
          this.form.bairro = res.bairro;
          this.form.rua = res.logradouro;
        }
      );
    }
  }

  salvarDoador() {
    console.log("salvar doador");
  }

}
