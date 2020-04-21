const connection = require('../database/connection.js');

module.exports = {
  async index(request,Response) {
    const ong_id = request.headers.authorization;

    const profile = await connection('incidents').where('ong_id',ong_id).select('*');   
    return Response.json( profile )
  }

}