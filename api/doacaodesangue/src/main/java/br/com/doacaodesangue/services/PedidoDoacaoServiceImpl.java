package br.com.doacaodesangue.services;

import br.com.doacaodesangue.models.entities.PedidoDoacao;
import br.com.doacaodesangue.repositories.PedidoDoacaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoDoacaoServiceImpl implements PedidoDoacaoService {

    private final PedidoDoacaoRepository pedidoDoacaoRepository;

    public PedidoDoacaoServiceImpl(PedidoDoacaoRepository pedidoDoacaoRepository){
        this.pedidoDoacaoRepository = pedidoDoacaoRepository;
    }

    @Override
    public List<PedidoDoacao> getAll() {
        return null;
    }

    @Override
    public PedidoDoacao getById(long id) {
        return null;
    }

    @Override
    public PedidoDoacao add(PedidoDoacao produto) {
        return null;
    }

    @Override
    public PedidoDoacao update(Long id, PedidoDoacao produto) {
        return null;
    }

    @Override
    public void delete(long id) {

    }
}
