import { Component, OnInit } from '@angular/core';

import { SejaUmDoadorService } from './service/seja-um-doador.service'
import { FormSejaUmDoador } from './model/seja-um-doador';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-seja-um-doador',
  templateUrl: './seja-um-doador.component.html',
  styleUrls: ['./seja-um-doador.component.scss']
})
export class SejaUmDoadorComponent implements OnInit {
  
  constructor(private service: SejaUmDoadorService) { }
  
  ngOnInit(): void {
  }

  form: FormSejaUmDoador = {
    "nome": "",
    "idade": "",
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

  validaForm() {
    const campos = [];

    if (this.form.bairro.trim() === "") {
      campos.push("Bairro");
    
    } if(this.form.cep.trim() === "") {
      campos.push("CEP");
    
    } if(this.form.cidade.trim() === "") {
      campos.push("Cidade");
    
    } if (this.form.idade.trim() == "") {
      campos.push("Idade");

    } if(parseInt(this.form.idade) < 16) {
      campos.push("Idade mínima permitida é 16 anos");
    
    } if(parseInt(this.form.idade) > 60) {
      campos.push("Idade máxima permitida é 60 anos");
    
    } if(this.form.nome.trim() === "") {
      campos.push("Nome");
    
    } if(this.form.numero.trim() === "") {
      campos.push("Número da rua");
    
    } if(this.form.rua.trim() === "") {
      campos.push("Rua");
    
    } if(this.form.sexo.trim() === "") {
      campos.push("Sexo");
    
    } if(this.form.tipoSanguineo.trim() === "") {
      campos.push("Tipo sanguíneo");
    
    } if(this.form.uf.trim() === "") {
      campos.push("UF");
    }

    return campos;
  }

  limpaForm() {
    this.form.bairro = "";
    this.form.cep = "";
    this.form.cidade = "";
    this.form.complemento = "";
    this.form.idade = "";
    this.form.nome = "";
    this.form.numero = "";
    this.form.rua = "";
    this.form.sexo = "";
    this.form.tipoSanguineo = "";
    this.form.uf = "";
  }

  buscaCep(event: any) {
    let cep = event.target.value.trim().replace("-","");

    if (cep.length >= 8 && cep.length < 9) {
      this.service.getCep(event.target.value.trim()).subscribe(
        (res) => {
          this.form.uf = res.uf;
          this.form.cidade = res.localidade;
          this.form.bairro = res.bairro;
          this.form.rua = res.logradouro;

        },(error: HttpErrorResponse) => {
          console.log("Error");
          console.log(error.error);
        }
      );
    }
  }

  salvaDoador() {
    console.log("salva dados no back-end");
    console.log(this.form);

    let formHasError = this.validaForm().length === 0;

    if (formHasError) {
      this.service.salvaDoador(this.form).subscribe(
        (res) => {
          console.log("Doador salvo com sucesso!");
        
        },(error: HttpErrorResponse) => {
        console.log("Error");
        console.log(error.error);
      }
      );
    } else {
      alert("Preencha os campos corretamente!");
    }    
  }

}
