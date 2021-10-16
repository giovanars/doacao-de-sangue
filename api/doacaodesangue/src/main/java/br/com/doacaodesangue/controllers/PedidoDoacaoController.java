package br.com.doacaodesangue.controllers;

import br.com.doacaodesangue.models.dtos.PedidoDoacaoDto;
import br.com.doacaodesangue.models.entities.PedidoDoacao;
import br.com.doacaodesangue.services.PedidoDoacaoServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pedido-doacao")
public class PedidoDoacaoController {

    private final PedidoDoacaoServiceImpl pedidoDoacaoService;

    public PedidoDoacaoController(PedidoDoacaoServiceImpl pedidoDoacaoService){
        this.pedidoDoacaoService = pedidoDoacaoService;
    }

    @GetMapping
    public List<PedidoDoacao> getAll() {
        return pedidoDoacaoService.getAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<PedidoDoacao> getById(
            @PathVariable("id") Long id
    ) {
        PedidoDoacao pedidoDoacao = pedidoDoacaoService.getById(id);
        if (pedidoDoacao == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(pedidoDoacao);
    }


    @PostMapping
    public ResponseEntity<PedidoDoacao> create(
            @RequestBody PedidoDoacaoDto pedidoDoacaoDto
    ) {
        PedidoDoacao pedidoDoacao = pedidoDoacaoService.add(new PedidoDoacao(pedidoDoacaoDto));

        return ResponseEntity
                .created(URI.create("/pedido-doacao/"+ pedidoDoacao.getId()))
                .body(pedidoDoacao);
    }


    @PutMapping("{id}")
    public ResponseEntity<PedidoDoacao> update(
            @PathVariable("id") Long id,
            @RequestBody PedidoDoacaoDto pedidoDoacaoDto
    ) {
        PedidoDoacao pedidoDoacaoAtualizado = pedidoDoacaoService.update(id, new PedidoDoacao(pedidoDoacaoDto));
        if (pedidoDoacaoAtualizado == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Foo Not Found");
        }
        return ResponseEntity.ok(pedidoDoacaoAtualizado);
    }


    @DeleteMapping("{id}")
    public void delete(
            @PathVariable("id") Long id
    ) {
        pedidoDoacaoService.delete(id);
    }

}
