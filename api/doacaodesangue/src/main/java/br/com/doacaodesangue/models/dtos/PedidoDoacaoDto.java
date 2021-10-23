package br.com.doacaodesangue.models.dtos;

import java.math.BigDecimal;
import java.util.LinkedList;
import java.util.List;

public class PedidoDoacaoDto {
    public String nome;
    public String sexo;
    public String tipoSanguineo;
    public String cep;
    public String rua;
    public String numero;
    public String bairro;
    public String complemento;
    public String uf;
    public String cidade;
    public String hemocentro;
    public String idDoador;
    public List<BancoDeSangue> bancoDeSangue = new LinkedList<>();

    public List<BancoDeSangue> getBancoDeSangue() {
    	    	
    	bancoDeSangue.add(new BancoDeSangue("tipoA", BigDecimal.valueOf(BancoDeSangue.getPorcentagemAleatoria())));
    	bancoDeSangue.add(new BancoDeSangue("tipoB", BigDecimal.valueOf(BancoDeSangue.getPorcentagemAleatoria())));
    	bancoDeSangue.add(new BancoDeSangue("tipoAB", BigDecimal.valueOf(BancoDeSangue.getPorcentagemAleatoria())));
    	bancoDeSangue.add(new BancoDeSangue("tipoO", BigDecimal.valueOf(BancoDeSangue.getPorcentagemAleatoria())));
    	
		return bancoDeSangue;
	}
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
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

	public String getHemocentro() {
		return hemocentro;
	}

	public void setHemocentro(String hemocentro) {
		this.hemocentro = hemocentro;
	}
	
	public void setIdDoador(String id) {
		this.idDoador = id;		
	}
	
	public String getIdDoador() {
		return idDoador;
	}
}
