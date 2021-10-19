package br.com.doacaodesangue.controllers;

import br.com.doacaodesangue.models.dtos.PedidoDoacaoDto;
import br.com.doacaodesangue.models.entities.PedidoDoacao;
import br.com.doacaodesangue.services.PedidoDoacaoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pedido-doacao")
public class PedidoDoacaoController {

    private final PedidoDoacaoService pedidoDoacaoService;

    public PedidoDoacaoController(PedidoDoacaoService pedidoDoacaoService){
        this.pedidoDoacaoService = pedidoDoacaoService;
    }

    @GetMapping
    public List<PedidoDoacao> getAl() {
        return pedidoDoacaoService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<PedidoDoacao> getById(@PathVariable("id") String id) {
        try{
            PedidoDoacao pedidoDoacao =  pedidoDoacaoService.getById(id);
            if (pedidoDoacao == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(pedidoDoacao);
        }catch (NoSuchElementException ex){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<PedidoDoacao> create(@RequestBody PedidoDoacaoDto pedidoDoacaoDto) {
        PedidoDoacao pedidoDoacao = pedidoDoacaoService.create(new PedidoDoacao(pedidoDoacaoDto));
        return ResponseEntity
                .created(URI.create("/pedido-doacao/"+ pedidoDoacao.getId()))
                .body(pedidoDoacao);
    }


    @PutMapping("{id}")
    public PedidoDoacao update(@PathVariable("id") String id, @RequestBody PedidoDoacaoDto pedidoDoacaoDto) {
        try{
            PedidoDoacao pedidoDoacao = pedidoDoacaoService.getById(id);
            if (pedidoDoacao == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Foo Not Found");
            }
            return pedidoDoacaoService.update(id, new PedidoDoacao(pedidoDoacaoDto));
        }catch (NoSuchElementException ex){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Foo Not Found");
        }

    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") String id) {
        pedidoDoacaoService.delete(id);
    }
}
