## Iniciando JSON server

Intale o JSON Server 

```
npm install -g json-server
```

Navegue até a pasta `/src/api/`

Execute o comando

```bash
json-server --watch db.json
```

Agora você pode executar os requests no endereço [http://localhost:3000/usuarios/1](http://localhost:3000/usuarios/1)

### Recursos disponíveis:
- [http://localhost:3000/usuarios](http://localhost:3000/usuarios)
- [http://localhost:3000/anuncios](http://localhost:3000/anuncios)
- [http://localhost:3000/categorias](http://localhost:3000/categorias)
- [http://localhost:3000/mensagens](http://localhost:3000/mensagens)