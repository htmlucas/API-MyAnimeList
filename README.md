# My Anime List

### Descrição
My Anime List é uma aplicação web que permite aos usuários gerenciar suas listas de animes favoritos. Os usuários podem fazer login, criar e atualizar seu perfil, adicionar animes às suas listas personalizadas, criar novos animes e categorias, e pesquisar animes por categoria.

### Features
### 👨‍👦 Usuários 
- [Criação de um novo usuário](#createuser).
- [Login de usuário](#loginuser).
- [Listar um usuário especifico](#listuser).
- [Excluir um usuário especifico (🔨 em desenvolvimento)](#deleteuser).

<div id="createuser">

#### Criação de um novo usuário

- **Endpoint:** `POST /user/create`
- **Descrição:** Cria um novo usuário.
- **Exemplo de envio:**

```json
    {
        "nickname": "Lucas",
        "email": "lucas@teste.com",
        "password": "123456"
    }
```
- **Exemplo de resposta:**

```json
    {
    "message": "Usuario criado"
    }
```

</div>

<div id="loginuser">

#### Login de usuário

- **Endpoint:** `POST /login`
- **Descrição:** Conecta um usuario ao sistema e retorna o token.
- **Exemplo de envio:**

```json
    {
        "email": "email@teste.com",
        "password": "123456"
    }
```
- **Exemplo de resposta:**

```json
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ",
        "user": {
            "id_user": "209c99dc-3579-4c54-8e4a-92797d1b4aa6",
            "nickname": "Lucas",
            "email": "lucas@teste.com",
            "password": 123456,
            "img": null
        }
    }
```
</div>

<div id="listuser">

#### Listar um usuário especifico

- **Endpoint:** `GET /user/:userId`
- **Descrição:** Lista todos os detalhes do usuario.
- **Exemplo de resposta:**

```json
    {
        "userId": "e9633354-e53e-4717-962a-1c94d5e2ab61",
        "nickname": "Pedro",
        "email": "pedro@teste.com",
        "cep": "11000-000",
        "cidade": "Caraguatatuba",
        "estado": "SP",
        "pais": "Brasil",
        "bio": "Eu adoro naruto, Naruto é um ninja da vila oculta da folha que sonha em ser hokage mas sem os pais presentes ele é visto por todos como uma criança descontrolada e todos o ignoram..."
    }
```
</div>

<div id="deleteuser">

#### Excluir um usuário especifico

- **Endpoint:** `DELETE /user`
- **Descrição:** Exclui um usuario em especifico.
- **Exemplo de resposta:**

```json
    (🔨 em desenvolvimento)
```
</div>

#### 👨‍👦 Usuários Detalhes
- [Atualiza informaçoes extras do usuário](#updateuser).

<div id="updateuser">

#### Atualiza informaçoes extras do usuário.

- **Endpoint:** `PATCH /user/details/update`
- **Descrição:** Atualiza informações do usuario.
- **Exemplo de envio:**

```json
    {
        "user_id": "e2c3dc5b-e525-4216-b9dd-1365d21753d",
        "cep": "11000-000",
        "cidade": "São Paulo",
        "estado": "SP",
        "pais": "Brasil",
        "bio": "Eu gosto de animes!"
    }
```
- **Exemplo de resposta:**

```json
    {
        "user_id": "e2c3dc5b-e525-4216-b9dd-1365d21753d",
        "cep": "11000-000",
        "cidade": "São Paulo",
        "estado": "SP",
        "pais": "Brasil",
        "bio": "Eu gosto de animes!"
    }
```
</div>


### 📖 Listas
- [Cria uma lista](#createlist).
- [Lista todas as "listas" do usuário](#listuser).
- [Lista todos os "animes" e informaçoes a respeito de uma lista em especifica](#infolist).
- [Atualiza o nome de uma lista](#updatelist).
- [Deleta uma lista](#deletelist).

<div id="createlist">

#### Cria uma lista.

- **Endpoint:** `POST /list/create`
- **Descrição:** Cria uma lista para o usuário.
- **Exemplo de envio:**

```json
    {
        "name":"Animes que eu gosto!",
        "user_id":"e9633354-e53e-4717-962a-1c94d5e2ab61"
    }
```
- **Exemplo de resposta:**

```json
    {
        "id_lists": "c89c8bbd-9476-4ed1-8421-82008c24d513",
        "user_id": "e9633354-e53e-4717-962a-1c94d5e2ab61",
        "name": "Animes que eu gosto!",
        "created_at": "2024-06-03T23:20:23.009Z"
    }
```
</div>

<div id="listuser">

#### Lista todas as "listas" do usuário.

- **Endpoint:** `GET /lists/:user_id`
- **Descrição:** Lista todas as listas que o usuário criou.
- **Exemplo de resposta:**

```json
    [
        {
            "id_lists": "3b1cee45-7bcc-4367-a436-982086bf53ec",
            "user_id": "e9633354-e53e-4717-962a-1c94d5e2ab61",
            "name": "exemplo 1",
            "created_at": "2024-05-06T13:43:47.518Z"
        },
        {
            "id_lists": "c89c8bbd-9476-4ed1-8421-82008c24d513",
            "user_id": "e9633354-e53e-4717-962a-1c94d5e2ab61",
            "name": "Animes que eu gosto!",
            "created_at": "2024-06-03T23:20:23.009Z"
        }
    ]
```
<div>

<div id="infolist">

#### Lista todos os "animes" e informaçoes a respeito de uma lista em especifica.

- **Endpoint:** `GET /list/:id_lists`
- **Descrição:** Lista todos os "animes" e informaçoes a respeito de uma lista em especifica.
- **Exemplo de resposta:**

```json
    {
  "listDetails": {
    "id_lists": "3b1cee45-7bcc-4367-a436-982086bf53ec",
    "user_id": "e9633354-e53e-4717-962a-1c94d5e2ab61",
    "name": "exemplo 1",
    "created_at": "2024-05-06T13:43:47.518Z"
  },
  "animesFromList": [
    {
      "id": "0546442e-729a-411c-8e69-de9da69594d1",
      "title": "Hunter x Hunter",
      "description": "Hunter × Hunter é uma série de mangá escrita e ilustrada por Yoshihiro Togashi. Os capítulos são serializados na revista Weekly Shōnen Jump desde 3 de março de 1998, onde são compilados e publicados em formato tankobon pela editora Shueisha, embora o mangá tenha frequentemente entrado em hiato desde 2006",
      "img": null
    },
    {
      "id": "1400e81c-4e1a-423a-b773-4ca11012fd72",
      "title": "Naruto",
      "description": "Naruto é um ninja da vila oculta da folha que sonha em ser hokage mas sem os pais presentes ele é visto por todos como uma criança descontrolada e todos o ignoram...",
      "img": "naruto.jpg"
    },
    {
      "id": "822a97f3-09d6-4c3d-a2d7-073a54f1678e",
      "title": "Yuyu Hakusho",
      "description": "Yu Yu Hakusho é uma série de mangá shonen escrita e ilustrada por Yoshihiro Togashi que conta a história de Yusuke Urameshi, um delinquente de quatorze anos de idade que é atingido e morto por um carro ao tentar salvar a vida de uma criança",
      "img": "yuyu.jpe"
    }
  ]
}
```
</div>

<div id="updatelist">

#### Atualiza o nome de uma lista.

- **Endpoint:** `PATCH /list/name/update`
- **Descrição:** Atualiza o nome de uma lista em especifica.
- **Exemplo de envio:**

```json
    {
        "id_lists":"c89c8bbd-9476-4ed1-8421-82008c24d513",
        "name": "A melhor lista"
    }
```
- **Exemplo de resposta:**

```json
    {
        "id_lists": "c89c8bbd-9476-4ed1-8421-82008c24d513",
        "user_id": "e9633354-e53e-4717-962a-1c94d5e2ab61",
        "name": "A melhor lista",
        "created_at": "2024-06-03T23:20:23.009Z"
    }
```
</div>

<div id="deletelist">

#### Deleta uma lista.

- **Endpoint:** `PATCH /list/:id_lists`
- **Descrição:** Deleta uma lista especifica.
- **Exemplo de resposta:**

```json
    {
      "message": "1 Registro(s) excluido(s) com sucesso."
    }
```
</div>


### 🐱‍👤⚔ Animes
- [Cria um anime](#createanime).
- [Lista todos os animes](#listanimes).
- [Procura animes dependendo do nome digitado](#searchanime).
- [Lista um anime especifico](#getanime).

<div id="createanime">

#### Cria um anime.

- **Endpoint:** `POST /anime/create`
- **Descrição:** Cria um anime junto com a categoria no qual pertence.
- **Exemplo de envio:**

```json
    {
        "title": "Dragon Ball Z",
        "description": "As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão.",
        "categoryId":"d50f67ca-87ed-4415-a69c-6fe1221a4a72"
    }
```
- **Exemplo de resposta:**

```json
    {
        "message": "Anime criado"
    }
```
</div>

<div id="listanimes">

#### Lista animes.

- **Endpoint:** `GET /animes`
- **Descrição:** Lista todos os animes existentes.
- **Exemplo de resposta:**

```json
[
    {
        "id": "2eddf118-2c45-46ff-8a78-e8c96911a07a",
        "title": "Jujutsu Kaisen",
        "description": "Jujutsu Kaisen é um mangá japonês escrito e ilustrado por Gege Akutami, serializado na Weekly Shōnen Jump desde 5 de março de 2018. Os capítulos individuais são compilados em volume tankōbon, e publicados pela Shueisha desde julho de 2018. A série é licenciada e publicada no Brasil pela editora Panini",
        "img": null
    },
    {
        "id": "ba6099cb-393a-45f3-a1c0-7b7aa97ee141",
        "title": "Dragon Ball Z",
        "description": "As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão.",
        "img": null
    }
]
```

</div>

<div id="searchanime">

#### Lista animes pelo nome digitado.

- **Endpoint:** `POST /animes/search`
- **Descrição:** Lista animes pelo nome digitado.
- **Exemplo de envio:**

```json
    {
        "titulo":"Drag"
    }
```
- **Exemplo de resposta:**

```json
[
    {
        "id": "ba6099cb-393a-45f3-a1c0-7b7aa97ee141",
        "title": "Dragon Ball Z",
        "description": "As aventuras de um poderoso guerreiro chamado Goku, seu filho Gohan e seus aliados, que se esforçam para defender a Terra das ameaças. Eles são auxiliados por um dragão que concede os desejos de quem quer que reúna as sete Esferas do Dragão.",
        "img": null
    }
]
```

</div>

<div id="getanime">

#### Lista um anime especifico

- **Endpoint:** `GET /anime/:id_anime`
- **Descrição:** Lista um anime especifico pelo ID.
- **Exemplo de resposta:**

```json
    {
        "id": "1400e81c-4e1a-423a-b773-4ca11012fd72",
        "title": "Naruto",
        "description": "Naruto é um ninja da vila oculta da folha que sonha em ser hokage mas sem os pais presentes ele é visto por todos como uma criança descontrolada e todos o ignoram...",
        "img": "naruto.jpg"
    }
```

</div>

### 🌎Categorias
- [Cria uma categoria](#createcategorie).
- [Lista todas as categorias](#listcategories).
- [Lista uma categoria especifica](#listespecificCategorie).

<div id="createcategorie">

#### Cria uma categoria.

- **Endpoint:** `POST /categorie/create`
- **Descrição:** Cria uma categoria.
- **Exemplo de envio:**

```json
    {
        "title": "Luta",
        "description": "Luta apenas luta"
    }
```
- **Exemplo de resposta:**

```json
    {
        "message": "Categoria Criada"
    }
```

</div>

<div id="listcategories">

#### Lista todas as categorias.

- **Endpoint:** `GET /categories`
- **Descrição:** Lista todas as categorias.
- **Exemplo de resposta:**

```json
    [
        {
            "id": "d50f67ca-87ed-4415-a69c-6fe1221a4a72",
            "title": "Fantasia",
            "description": "Mundo com fantasia"
        },
        {
            "id": "85c69de3-00a5-4211-8a3c-75499b57ed47",
            "title": "Ação",
            "description": "Mistura elementos de ação, com lutas e mais lutas"
        },
        {
            "id": "ac9c4fa4-726e-4e0f-bce0-866e945db91a",
            "title": "Ficção",
            "description": "Ficção descrição"
        },
        {
            "id": "9433629e-3cb5-4e74-ab85-3480ae20fa02",
            "title": "Luta",
            "description": "Luta apenas luta"
        }
    ]
```

</div>

<div id="listespecificCategorie">

#### Lista uma categoria especifica e todos os animes vinculadas a ela.

- **Endpoint:** `GET /categorie/:id`
- **Descrição:** Lista uma categoria especifica e todos os animes vinculadas a ela.
- **Exemplo de resposta:**

```json
    {
        "id": "85c69de3-00a5-4211-8a3c-75499b57ed47",
        "title": "Ação",
        "description": "Mistura elementos de ação, com lutas e mais lutas",
        "animes": [
            {
            "id": "0546442e-729a-411c-8e69-de9da69594d1",
            "title": "Hunter x Hunter",
            "description": "Hunter × Hunter é uma série de mangá escrita e ilustrada por Yoshihiro Togashi.",
            "img": null
            }
        ]
    }
```

</div>

### 👨‍👦🐱‍👤📖 User Anime List
- [Cria o relacionamento de adição do anime a lista do usuario](#addAnimetoList).
- [Delete o anime da lista do usuario](#deleteAnimefromList).

<div id="addAnimetoList">

#### Cria o relacionamento de adição do anime a lista do usuario.

- **Endpoint:** `POST /useranimelist/create`
- **Descrição:** Adiciona um anime a uma lista criada.
- **Exemplo de envio:**

```json
    {
        "id_lists":"3b1cee45-7bcc-4367-a436-982086bf53ec",
        "anime_id": "ba6099cb-393a-45f3-a1c0-7b7aa97ee141",
        "date_add": "2024-06-04 17:47:09.693",
        "rating": 5
    }
```
- **Exemplo de resposta:**

```json
    {
        "id_useranimelist": "bd5b95d4-f51b-43db-83c4-b20ca1f3b149",
        "id_lists": "3b1cee45-7bcc-4367-a436-982086bf53ec",
        "anime_id": "ba6099cb-393a-45f3-a1c0-7b7aa97ee141",
        "date_added": "2024-06-04T20:47:09.693Z",
        "rating": 5
    }
```
</div>

<div id="deleteAnimefromList">

#### Delete o anime da lista do usuario.

- **Endpoint:** `DELETE /useranimelist/:id_lists/:id_anime`
- **Descrição:** Deleta um anime especifico de uma lista do usuário.
- **Exemplo de resposta:**

```json
    {
        "message": "1 Registro(s) excluido(s) com sucesso."
    }
```
</div>

### Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Plataforma de desenvolvimento para construir a API.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a segurança e a qualidade do código.
- **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev):** Ferramenta de execução de TypeScript que reinicia automaticamente o servidor durante o desenvolvimento.
- **[Jest](https://jestjs.io/):** Estrutura de testes em JavaScript, utilizada para escrever e executar testes unitários.
- **[TS-Jest](https://www.npmjs.com/package/ts-jest):** Biblioteca que permite usar Jest para testar código TypeScript.
- **[@types/cors](https://www.npmjs.com/package/@types/cors):** Tipagens para o middleware de CORS no Node.js.
- **[@types/express](https://www.npmjs.com/package/@types/express):** Tipagens para o framework Express, facilitando o desenvolvimento com TypeScript.
- **[@types/jest](https://www.npmjs.com/package/@types/jest):** Tipagens para o Jest, proporcionando suporte ao desenvolvimento em TypeScript com autocompletar e verificação de tipos.
- **[@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken):** Tipagens para a biblioteca jsonwebtoken, usada para autenticação com JWT.
- **[Express](https://expressjs.com/):** Framework web rápido e minimalista para Node.js, utilizado para construir a API.
- **[CORS](https://www.npmjs.com/package/cors):** Middleware para habilitar CORS (Cross-Origin Resource Sharing) em servidores Express.
- **[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken):** Biblioteca para trabalhar com JSON Web Tokens (JWT), usada para autenticação e autorização.
- **[Reflect Metadata](https://www.npmjs.com/package/reflect-metadata):** Biblioteca que adiciona suporte para metadados no TypeScript, necessária para o funcionamento do TypeORM.
- **[SQLite3](https://www.npmjs.com/package/sqlite3):** Binding SQLite3 assíncronas e sem bloqueio para Node.js.
- **[TypeORM](https://typeorm.io/):** ORM (Object-Relational Mapping) para TypeScript e JavaScript, que permite trabalhar com bancos de dados usando modelos de classe.

### Dependências de Desenvolvimento

- **[@types/cors](https://www.npmjs.com/package/@types/cors):** Tipagens para o middleware de CORS no Node.js.
- **[@types/express](https://www.npmjs.com/package/@types/express):** Tipagens para o framework Express, facilitando o desenvolvimento com TypeScript.
- **[@types/jest](https://www.npmjs.com/package/@types/jest):** Tipagens para o Jest, proporcionando suporte ao desenvolvimento em TypeScript com autocompletar e verificação de tipos.
- **[@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken):** Tipagens para a biblioteca jsonwebtoken, usada para autenticação com JWT.
- **[Jest](https://jestjs.io/):** Estrutura de testes em JavaScript, utilizada para escrever e executar testes unitários.
- **[TS-Jest](https://www.npmjs.com/package/ts-jest):** Biblioteca que permite usar Jest para testar código TypeScript.
- **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev):** Ferramenta de execução de TypeScript que reinicia automaticamente o servidor durante o desenvolvimento.
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação que adiciona tipagem estática ao JavaScript, aumentando a segurança e a qualidade do código.

### Como Rodar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/htmlucas/API-Node-Typescript-MyAnimeList.git
cd API-Node-Typescript-MyAnimeList
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute o servidor em modo de desenvolvimento:**

```bash
npm run dev
```

4. **Execute as migrações do banco de dados:**

```bash
npm run migration:run
```

5. **Execute os testes:**

```bash
npm test
```

6. **Crie a versão de distribuição:**

```bash
npm run build
```

7. **Execute a versão de distribuição:**

```bash
npm start
```

### Scripts Disponíveis

- **`npm run build`**: Remove o diretório de build anterior e compila o projeto TypeScript para JavaScript.
- **`npm start`**: Executa a versão de distribuição do servidor.
- **`npm test`**: Executa os testes usando Jest.
- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento com reinicialização automática.
- **`npm run typeorm`**: Utilitário TypeORM para executar comandos de migração.
- **`npm run migration:create -n <NOME_DA_MIGRACAO>`**: Cria uma nova migração.
- **`npm run migration:run`**: Executa todas as migrações pendentes.
- **`npm run migration:revert`**: Reverte a última migração executada.


### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

### Licença
Este projeto está licenciado sob a ISC License.

