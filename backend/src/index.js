const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Metodos HTTP:
 * GET: buscar/listar uma informação no backend
 * POST: Cria uma informação no backend
 * PUT: Altera uma informação no backend
 * DELETE: Deleta uma informação no backend
 * 
 **/ 

/***
 *  Tipos de parametros
 *  Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginas)
 *  Route Params: Parametros utilizados para nomear recursos
 *  Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * ***/

 /**
  * SQL: MySQL,SQLite, PostgreSQL
  * noSQL: MongoDB, CouchDB, etc
  * 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



