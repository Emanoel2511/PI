const http = require('http');

const cidades = [
  {
    id: 1,
    nome: "Boituva",
    estado: "SP",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 2,
    nome: "Camacam",
    estado: "BH",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 3,
    nome: "Ilheus",
    estado: "BA",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 4,
    nome: "Itanhaem",
    estado: "SP",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 5,
    nome: "Pau Brasil",
    estado: "BA",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 6,
    nome: "Praia Grande",
    estado: "SP",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 7,
    nome: "Poço de Caldas",
    estado: "MG",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  },
  {
    id: 8,
    nome: "Olimpia",
    estado: "SP",
    link_destino: "https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/"
  }
];

const server = http.createServer((req, res) => {
  if (req.url === '/api/cidades') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify(cidades));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
