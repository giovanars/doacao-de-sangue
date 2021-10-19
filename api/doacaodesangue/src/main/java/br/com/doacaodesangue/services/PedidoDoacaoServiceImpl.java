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
    public PedidoDoacao getById(String id) {
        return pedidoDoacaoRepository.findById(id).get();
    }

    @Override
    public List<PedidoDoacao> getAll(){
        return pedidoDoacaoRepository.findAll();
    }

    @Override
    public PedidoDoacao create(PedidoDoacao pedidoDoacao){
        return pedidoDoacaoRepository.save(pedidoDoacao);
    }

    @Override
        public PedidoDoacao update(String id, PedidoDoacao pedidoDoacao) {
        pedidoDoacao.setId(id);
        return pedidoDoacaoRepository.save(pedidoDoacao);
    }

    @Override
    public void delete(String id) {
        pedidoDoacaoRepository.delete(pedidoDoacaoRepository.findById(id).get());
    }
}
