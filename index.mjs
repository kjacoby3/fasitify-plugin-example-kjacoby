export default async function plugin(fastify, options) {
  fastify.get('/Jacoby', async function (request, reply) {
    reply
      .header('Content-Type', 'text/html')
      .send('<html><h1>Jacoby is a cool guy</h1></html>')
  });
}
