
/**
 * Rota / Recurso
 */

 /**
  * Método HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informaçãp no back-end
  * 
  */

  /**
   * Tipos de parâmetros
   * 
   * Query: Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para indentificar recursos
   * Request Bady: Corpo da requisção, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver do banco: SELECT * FROM users
     * Query Builder: table('users').select('*').where()...
     * Query Builder -> linguagem js, adaptavel a todos os bancos SQL
     */

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

