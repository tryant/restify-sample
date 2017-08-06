import restify from 'restify';
import './database/config';

function respond(req, res, next) {
  res.send('Hello, World!');
  next();
}

const server = restify.createServer({
  name: 'Restify Sample',
  version: '1.0.0'
});

server.pre(restify.pre.userAgentConnection());

server.get('/', respond);
server.head('/', respond);

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
