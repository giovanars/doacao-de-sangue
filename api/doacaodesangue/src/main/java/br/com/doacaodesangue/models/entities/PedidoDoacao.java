package br.com.doacaodesangue.models.entities;

import br.com.doacaodesangue.models.dtos.PedidoDoacaoDto;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class PedidoDoacao {

    @Id
    private Long id;
    private String name;
    private String sexo;
    private String tipoSanguineo;
    private String cep;
    private String uf;
    private String cidade;
    private String bairro;
    private String rua;
    private String numero;
    private String complemento;

    public PedidoDoacao(PedidoDoacaoDto pedidoDoacaoDto) {
        this.name = pedidoDoacaoDto.getName();
        this.sexo = pedidoDoacaoDto.getSexo();
        this.tipoSanguineo = pedidoDoacaoDto.getTipoSanguineo();
        this.cep = pedidoDoacaoDto.getCep();
        this.uf = pedidoDoacaoDto.getUf();
        this.cidade = pedidoDoacaoDto.getCidade();
        this.bairro = pedidoDoacaoDto.getBairro();
        this.rua = pedidoDoacaoDto.getRua();
        this.numero = pedidoDoacaoDto.getNumero();
        this.complemento = pedidoDoacaoDto.getComplemento();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}
