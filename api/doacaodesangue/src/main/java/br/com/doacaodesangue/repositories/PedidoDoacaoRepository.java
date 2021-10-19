package br.com.doacaodesangue.repositories;

import br.com.doacaodesangue.models.entities.PedidoDoacao;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PedidoDoacaoRepository extends MongoRepository<PedidoDoacao, String> {
}
