package br.com.doacaodesangue.services;

import br.com.doacaodesangue.models.entities.PedidoDoacao;
import java.util.List;

public interface PedidoDoacaoService {
    List<PedidoDoacao> getAll();
    PedidoDoacao getById(long id);
    PedidoDoacao create(PedidoDoacao produto);
    PedidoDoacao update(Long id, PedidoDoacao produto);
    void delete(long id);
}
