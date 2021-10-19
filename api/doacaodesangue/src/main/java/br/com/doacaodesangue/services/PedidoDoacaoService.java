package br.com.doacaodesangue.services;

import br.com.doacaodesangue.models.entities.PedidoDoacao;
import java.util.List;

public interface PedidoDoacaoService {
    List<PedidoDoacao> getAll();
    PedidoDoacao getById(String id);
    PedidoDoacao create(PedidoDoacao produto);
    PedidoDoacao update(String id, PedidoDoacao produto);
    void delete(String id);
}
