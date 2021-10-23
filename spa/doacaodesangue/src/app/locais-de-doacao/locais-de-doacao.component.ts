import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormRegistreUmPedido } from '../registre-um-pedido/model/registre-um-pedido';
import { RegistreUmPedidoService } from '../registre-um-pedido/service/registre-um-pedido';
import { FormLocaisDeDoacao, ResponseGetAllPedidosDoacao } from './model/locais-de-doacao';
import { LocaisDeDoacaoService } from './service/locais-de-doacao.service';

@Component({
  selector: 'app-locais-de-doacao',
  templateUrl: './locais-de-doacao.component.html',
  styleUrls: ['./locais-de-doacao.component.scss']
})
export class LocaisDeDoacaoComponent implements OnInit {

  constructor(private service: LocaisDeDoacaoService, private service2: RegistreUmPedidoService) { }

  ngOnInit(): void {
    this.service.getAllPedidosDeDoacao().subscribe(
      (res) => {
        if(res.length == 0) {
          console.log("Populando banco de dados");
          
          this.locaisDeDoacaoPopula.forEach(i => {
            this.service2.salvaDoador(i);
          });
        }
      }
    );

    this.getHemocentros();
  }

  locaisDeDoacao: ResponseGetAllPedidosDoacao[] = [{
    "nome": "",
    "sexo": "",
    "tipoSanguineo": "",
    "cep": "",
    "rua": "",
    "numero": "",
    "bairro": "",
    "complemento": "",
    "uf": "",
    "cidade": "",
    "hemocentro": "",
    "distancia": "",
    "bancoDeSangue": [
        {
            "tipoSanguineo": "",
            "porcentagem": 0
        }
    ]
  }];

  locaisDeDoacaoPopula: FormRegistreUmPedido[] = [{
    "nome": "João Lopes Oliveira",
    "sexo": "Masculino",
    "tipoSanguineo": "A",
    "cep": "05403-000",
    "rua": "Av. Enéas Carvalho de Aguiar",
    "numero": "155",
    "bairro": "Cerqueira César",
    "complemento": "1º andar",
    "uf": "SP",
    "cidade": "São Paulo",
    "hemocentro": "Posto Clínicas"
  },
  {
    "nome": "Jennifer Souza da Silva",
    "sexo": "Feminino",
    "tipoSanguineo": "AB",
    "cep": "04012-180",
    "rua": "Av. Doutor Dante Pazzanese",
    "numero": "500",
    "bairro": "Vila Mariana",
    "complemento": "",
    "uf": "SP",
    "cidade": "São Paulo",
    "hemocentro": "Dante Pazzanese"
  }];

  form: FormLocaisDeDoacao = {
    "endereco": "",
    "tiposanguineo":""
  }

  hemocentro = "";
  tipoa = 0;
  tipob = 0;
  tipoab = 0;
  tipoo = 0;
  endereco = "";

  setBancoDeSangue(local: ResponseGetAllPedidosDoacao) {
    this.hemocentro = local.hemocentro;
    
    local.bancoDeSangue.forEach(i => {
      if(i.tipoSanguineo == "tipoA") {
        this.tipoa = i.porcentagem;
      
      } else if (i.tipoSanguineo == "tipoB") {
        this.tipob = i.porcentagem;
      
      } else if (i.tipoSanguineo == "tipoAB") {
        this.tipoab = i.porcentagem;
      
      } else if (i.tipoSanguineo == "tipoO") {
        this.tipoo = i.porcentagem;
      }
    });
  }

  getHemocentros() {

    this.locaisDeDoacao.forEach(i => {
      if(i.nome == "" && i.cep == "") {
        this.locaisDeDoacao.pop();
      }
    });
    
    if(this.locaisDeDoacao.length == 0) {
      this.service.getAllPedidosDeDoacao().subscribe(
        (res) => {
          this.locaisDeDoacao = res;
        }
        ),(error: HttpErrorResponse) => {
          console.log("Error");
          console.log(error.error);
        };
        
        return this.locaisDeDoacao;
      }

    return this.locaisDeDoacao;
  }

  pesquisar() {
            
    if (this.form.endereco.trim() != "" && this.form.tiposanguineo != "") {
      this.service.getInfoGoogleMaps(this.form.endereco).subscribe(
        (res) => {               
        res.results.forEach(i => {
          
          res.results.forEach(j =>{
            this.endereco = `${j.formatted_address}`
          });         
          
        });
                
      },(error: HttpErrorResponse) => {
        console.log("Error");
        console.log(error.error);
      }
      );

      /*var t = this.locaisDeDoacao[1];
      console.log(this.form.endereco);
      console.log(t.rua);      
      
      this.service.getInfoGoogleMapsDirections(this.form.endereco, t.rua).subscribe(
        (res) => {
          res.routes.forEach(j =>{
            j.legs.forEach(dis =>{
              t.distancia = dis.distance.text;
            });
            console.log(res);
          });
        }
      );*/
     

      /*this.locaisDeDoacao.forEach(local => {
        this.service.getInfoGoogleMapsDirections(this.form.endereco, local.rua).subscribe(
          (res) => {
            res.routes.forEach(j =>{
              j.legs.forEach(dis =>{
                local.distancia = dis.distance.text;
              });
            });
          }
        );
      });*/
    }
  }


}
