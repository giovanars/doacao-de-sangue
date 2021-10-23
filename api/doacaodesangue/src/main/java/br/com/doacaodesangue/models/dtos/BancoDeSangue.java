package br.com.doacaodesangue.models.dtos;

import java.math.BigDecimal;
import java.util.Random;

public class BancoDeSangue {

	private String tipoSanguineo;
	private BigDecimal porcentagem;

	public BancoDeSangue() {

	};

	public BancoDeSangue(String tipoSanguineo, BigDecimal porcentagem) {
		this.tipoSanguineo = tipoSanguineo;
		this.porcentagem = porcentagem;
	}
	
	public static Integer getPorcentagemAleatoria() {		
		Random gerador = new Random();		
		return gerador.nextInt(100);		
	}

	public String getTipoSanguineo() {
		return tipoSanguineo;
	}

	public void setTipoSanguineo(String tipoSanguineo) {
		this.tipoSanguineo = tipoSanguineo;
	}

	public BigDecimal getPorcentagem() {
		return porcentagem;
	}

	public void setPorcentagem(BigDecimal porcentagem) {
		this.porcentagem = porcentagem;
	}

}
