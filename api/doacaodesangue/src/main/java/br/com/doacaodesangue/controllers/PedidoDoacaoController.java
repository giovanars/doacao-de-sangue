package br.com.doacaodesangue.controllers;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.doacaodesangue.models.dtos.PedidoDoacaoDto;
import br.com.doacaodesangue.models.entities.PedidoDoacao;
import br.com.doacaodesangue.services.PedidoDoacaoService;

@RestController
@RequestMapping("/pedido-doacao")
public class PedidoDoacaoController {

    private final PedidoDoacaoService pedidoDoacaoService;

    public PedidoDoacaoController(PedidoDoacaoService pedidoDoacaoService){
        this.pedidoDoacaoService = pedidoDoacaoService;
    }

    @GetMapping
    public ResponseEntity<List<PedidoDoacaoDto>> getAl() {
    	
        List<PedidoDoacao> list = pedidoDoacaoService.getAll();
        
        List<PedidoDoacaoDto> pedidoDoacaoDto = new LinkedList<PedidoDoacaoDto>();
        
        list.forEach(i -> {
        	PedidoDoacaoDto p = new PedidoDoacaoDto();        	
        	
        	p.setBairro(i.bairro);
        	p.setCep(i.cep);
        	p.setCidade(i.cidade);
        	p.setComplemento(i.complemento);
        	p.setHemocentro(i.hemocentro);
        	p.setNome(i.nome);
        	p.setNumero(i.numero);
        	p.setRua(i.rua);
        	p.setSexo(i.sexo);
        	p.setTipoSanguineo(i.tipoSanguineo);
        	p.setUf(i.uf);
        	p.setIdDoador(i.id);
        	
        	pedidoDoacaoDto.add(p);
        });
        
        return ResponseEntity.ok(pedidoDoacaoDto);
        
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
    public ResponseEntity<String> delete(@PathVariable String id) {
        
    	pedidoDoacaoService.delete(id);
        return ResponseEntity.ok("Registro deletado com sucesso!");
    }
}
