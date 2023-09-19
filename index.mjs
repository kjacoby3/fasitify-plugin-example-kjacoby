export default async function plugin(fastify, options) {
  fastify.get('/jacoby', async function (request, reply) {
    return { Koen: 'knows how to create a Fastify plugin' };
  });
}
