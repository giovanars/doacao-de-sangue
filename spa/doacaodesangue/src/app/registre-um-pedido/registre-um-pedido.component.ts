import { Component, OnInit } from '@angular/core';

import { RegistreUmPedidoService } from './service/registre-um-pedido'
import { FormRegistreUmPedido } from './model/registre-um-pedido';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registre-um-pedido',
  templateUrl: './registre-um-pedido.component.html',
  styleUrls: ['./registre-um-pedido.component.scss']
})
export class RegistreUmPedidoComponent implements OnInit {
  
  constructor(private service: RegistreUmPedidoService, private router: Router) { }
  
  ngOnInit(): void {
  }

  form: FormRegistreUmPedido = {
    "nome": "",
    "sexo": "",
    "tipoSanguineo": "",
    "cep": "",
    "uf": "",
    "cidade": "",
    "bairro": "",
    "rua": "",
    "numero": "",
    "complemento": "",
    "hemocentro": ""
  }

  validaForm() {
    const campos = [];

    if (this.form.bairro.trim() === "") {
      campos.push("Bairro");
    
    } if(this.form.cep.trim() === "") {
      campos.push("CEP");
    
    } if(this.form.cidade.trim() === "") {
      campos.push("Cidade");
    
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
      
    } if(this.form.hemocentro.trim() === "") {
      campos.push("Hemocentro");
    }
    
    return campos;
  }

  limpaForm() {
    this.form.bairro = "";
    this.form.cep = "";
    this.form.cidade = "";
    this.form.complemento = "";
    this.form.nome = "";
    this.form.numero = "";
    this.form.rua = "";
    this.form.sexo = "";
    this.form.tipoSanguineo = "";
    this.form.uf = "";
    this.form.hemocentro = "";
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
          console.log("Pedido salvo com sucesso!");
          alert("Pedido salvo com sucesso!");
          this.router.navigate(['locais-de-doacao'])
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
