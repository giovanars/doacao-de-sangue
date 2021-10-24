# FIAP - TURMA 40SCJ - GRUPO 02
## Atividade de conclusão da disciplina WEBSERVICES & RESTFUL TECHNOLOGIES
### PROF. EDUARDO FERREIRA GALEGO

## Sobre
A proposta era criar um projeto que focasse na retomada da economia e/ou da vida contidiana pós pandemia.  
O grupo optou pelo tema:  
**Doação de Sangue**   

### Principais funcionalidades
- Cadastrar pedidos de doação de sangue  
- Consultar locais para doação de sangue  

### To-Do
 * [ ] Calcular a distância entre o endereço da pessoa e o Hemocentro (na página Locais de Doação)
 * [ ] Filtrar pelos tipos de sangue na página Locais de Doação

## Tecnologias e informações:

### Front-end:
* Angular
* Bootstrap
* Consome dados do VIACEP
* Consome dados do Geocoding
* Consome dados do Back-end

### Back-end:
* Java 11+
* Spring Boot
* Swagger
* Utilização dos padrões REST

### Banco de dados:
* MongoDB em um container Docker

# Como subir
Clone o repositório.

**Back-end:**
1. Entre no diretório api/doacaodesangue e rode: `docker-compose up`
2. Inicialize o Projeto
3. Para acessar ao Swagger: http://localhost:8080/swagger-ui.html 

**Front-End:**
1. Caso não possua, instale o angular a partir do comando: `npm install -g @angular/cli`
2. Acesse o diretório spa/doacaodesangue e rode: `npm install`
3. inicialize o projeto com o comando: `ng serve`
4. Para acessar a página front: http://localhost:4200/
