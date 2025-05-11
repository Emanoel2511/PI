
                                                                                                             
CENTRO UNIVERSITÁRIO SENAC

PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB

UrbanExplorer
"Descubra os tesouros escondidos da sua cidade!"



EMANOEL VIDAL CERQUEIRA DE MIRANDA
HENRIQUE AUGUSTO MARTINS FERNANDES
HIGOR AUGUSTO DE DEUS
LUCAS ALBERTI MACHADO
VINICIUS LUSCRI
VITOR ALVES BERNADINO







São Paulo
2025



                                                                                                             
CENTRO UNIVERSITÁRIO SENAC

PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS E BASEADOS NA WEB

UrbanExplorer
"Descubra os tesouros escondidos da sua cidade!"



Trabalho de Projeto Integrador I desenvolvido como exigência para obtenção de nota parcial para 1º semestre do Curso Análise e Desenvolvimento de Sistemas – Centro Universitário SENAC, sob orientação do Ruth Garcia.
.





São Paulo
2025









AGRADECIMENTOS

Agradecemos em primeiro lugar, a Deus, por iluminar nossos passos, e nos dar a certeza de que os desafios estão presentes em nossas vidas para serem superados.
Agradecemos ao nosso orientador e professor, por aceitar e compartilhar conosco o desafio que é executar um trabalho de conclusão de curso e a todos professores envolvidos que nos proporcionou e contribuíram no desenvolvimento deste trabalho, e com certeza estará presente nas próximas etapas.
Com certeza as críticas e sugestões que todos fizeram, tornou este trabalho o que ele é hoje.













RESUMO

VIDAL, E. MARTINS, H, AUGUSTO, H. LUSCRI, V. ALVES, V. ALVES, L.  Implementação de processo diagnostico de soluções de tecnologia - Práticas extensionistas - Centro Universitário SENAC, São Paulo, 2025.

Este trabalho foi elaborado a partir da solicitação do Centro Universitário SENAC, com objetivo de apresentar a evolução dos elementos técnicos da computação na sociedade e seus impactos, bem como a lógica e organização interna do computador, seu funcionamento e aplicações, apresentar os conceitos e lógica de programação para subsidiar o desenvolvimento de algoritmos, apresentar conceitos de ciência e tecnologia e seus impactos na sociedade, abordando métodos e técnicas de pesquisa e comunicação científica, além de apresentar conceitos relacionados à gestão de organizações contemporâneas, além de abordar as transformações no mundo do trabalho e fundamentos teóricos e tecnológicos implicados na composição da infraestrutura do sistema de informação das organizações.
Em outras palavras, além da prática do processo de ideação de uma solução em TI em grupo, a disciplina também terá como objetivo estimular individualmente o aluno quanto a formação de competências e habilidades no que diz respeito aos conhecimentos essenciais Análise Desenvolvimento de Sistemas, ofertado através de treinamento autoinstrutivo.

Palavras-chave: Arquitetura da solução de software, Implementação do webservice e descrição dos serviços disponíveis, Implementação do front-end baseado em padrão web, fundamentos da administração, infraestrutura e tecnologia, computação em nuvem. 






ABSTRACT

VIDAL, E. MARTINS, H, AUGUSTO, H. LUSCRI, V. ALVES, V. ALVES, L. Implementation of a diagnostic process for technology solutions - Extension practices - SENAC University Center, São Paulo, 2025.

This work was prepared at the request of SENAC University Center, with the objective of presenting the evolution of the technical elements of computing in society and their impacts, as well as the logic and internal organization of the computer, its operation and applications, presenting the concepts and programming logic to support the development of algorithms, presenting concepts of science and technology and their impacts on society, addressing methods and techniques of research and scientific communication, in addition to presenting concepts related to the management of contemporary organizations, in addition to addressing the transformations in the world of work and theoretical and technological foundations involved in the composition of the infrastructure of the information system of organizations.
In other words, in addition to practicing the process of creating an IT solution in a group, the discipline will also aim to individually stimulate the student in terms of developing skills and abilities regarding the essential knowledge of Systems Analysis and Development, offered through self-instructional training.

Keywords: Software solution architecture, Implementation of web service and description of available services, Implementation of front-end based on web standard, fundamentals of administration, infrastructure and technology, cloud computing.



SUMÁRIO


INTRODUÇÃO...................................................................................................................7
1. REVISÃO BIBLIOGRÁFICA.........................................................................................9
1.1 Desenvolvimento de sistemas.....................................................................................9
1.2 Sistemas distribuídos...................................................................................................9
1.3 Web standards...........................................................................................................10
2. RESUMO DAS CONDIÇÕES DO PROJETO..............................................................12
2.1 Visão de produto........................................................................................................12
2.2 Personas....................................................................................................................14
2.3 Jornadas associadas.................................................................................................18
3. URBANEXPLORER....................................................................................................22
3.1 HTML (HyperText Markup Language) - Estrutura do UrbanExplorer ........................23
3.2 CSS (Cascading Style Sheets) - Estilo e Responsividade.........................................23
3.3 JavaScript - Interatividade e Funcionalidade..............................................................24
3.4 MySQL - Banco de Dados do UrbanExplorer.............................................................24
4.0 API: Endpoint e Funcionalidade.............................................................................25
4.1 Uso de Banco de Dados (BD)....................................................................................26
4.2 Benefícios da Abordagem Atual.................................................................................27
CONSIDERAÇÕES FINAIS............................................................................................28
REFERÊNCIA BIBLIOGRÁFICA....................................................................................29

 

INTRODUÇÃO
O turismo desempenha um papel essencial na valorização cultural, econômica e social das cidades, independentemente de seu tamanho ou localização. No entanto, muitos destinos, especialmente em cidades de pequeno e médio porte, acabam sendo subestimados ou ignorados devido à falta de visibilidade e acesso à informação. Pensando nisso, surge a proposta de desenvolvimento de um aplicativo inovador, dedicado a conectar turistas e moradores locais a pontos turísticos, eventos, restaurantes, hotéis e outras atividades que enriquecem a experiência de exploração urbana.
O objetivo principal do projeto é criar uma plataforma intuitiva e interativa que funcione como um guia completo e dinâmico para os usuários. A proposta vai além de destacar atrações tradicionais: busca revelar os tesouros escondidos de cada cidade, promovendo experiências únicas e autênticas que muitas vezes passam despercebidas. Combinando tecnologia e acessibilidade, o aplicativo será projetado para oferecer informações atualizadas e personalizadas, permitindo que os usuários descubram lugares, eventos e serviços baseados em suas preferências e localização.

A aplicação inovadora dedicada a promover pontos turísticos e atividades locais trará diversas oportunidades para os moradores das cidades envolvidas. Primeiramente, ao destacar atrações, eventos e serviços regionais, o aplicativo impulsionará a visibilidade de negócios locais, como restaurantes, hotéis, lojas e artesãos, fomentando a economia da região. Pequenos empreendedores terão a chance de alcançar novos públicos, aumentando suas vendas e reconhecimento.

Além disso, o fortalecimento do turismo estimulará a criação de empregos diretos e indiretos, tanto nos setores de hospedagem e gastronomia quanto em atividades culturais e recreativas. A valorização de eventos e atrações menos conhecidas também incentivará os moradores a se engajarem mais com a história e a cultura de sua própria cidade, promovendo um sentimento de pertencimento.


Por fim, o aplicativo poderá atrair investimentos para infraestrutura local, melhorar a qualidade de vida e criar um ciclo sustentável onde o turismo beneficia toda a comunidade. Dessa forma, a aplicação não apenas conectará turistas aos destinos, mas também atuará como uma ferramenta transformadora para os moradores locais.




1.	REVISÃO BIBLIOGRÁFICA

1.1.	Desenvolvimento de Sistemas
A informação é algo tão valioso para as instituições quanto o produto e o serviço que oferecem e, com o avanço das tecnologias e a facilidade ao seu acesso, as empresas passaram a depender cada vez mais desses dados e dos sistemas computacionais disponíveis para acompanhar suas atividades.
Os sistemas e softwares exercem um papel muito importante nesta era tecnológica, nos dias atuais as empresas, indivíduos, governo e população em geram tem total dependência dessa tecnologia.
O Surgimento dos primeiros sistemas de software ocorreu na década de 1950; sua evolução foi densa e rápida e, desde então, seu progresso é constante, continuando a ser a tecnologia mais importante no contexto mundial (PRESSMAN, 1995; PRESSMAN, 2016).
Desde o surgimento dos primeiros sistemas de software sua evolução não parou.

1.2. Sistemas Distribuídos
Os sistemas distribuídos desempenham um papel crucial em várias aplicações modernas, como serviços em nuvem e redes sociais. 
Segundo Tanenbaum e Van Steen (2016), “um sistema distribuído é aquele em que os componentes localizados em diferentes computadores trabalham de forma coordenada para alcançar um objetivo comum”. 
Essa característica permite a divisão de tarefas e a redundância, aumentando a eficiência e a tolerância a falhas.

Entre os aspectos mais notáveis dos sistemas distribuídos é sua escalabilidade.
 Conforme Coulouris, Dollimore e Kindberg (2012), “a escalabilidade é uma das principais vantagens desses sistemas, pois a adição de novos recursos não degrada seu desempenho global”. 


Característica particularmente importante em serviços como Amazon Web Services (AWS) e Google Cloud, onde a capacidade pode ser ajustada dinamicamente para atender à demanda.
A comunicação entre componentes em um sistema distribuído é geralmente realizada por meio de APIs e mensagens. 
Como explica Birman (2005), “a comunicação confiável é fundamental para o sucesso de sistemas distribuídos, especialmente em cenários de computação em tempo real”.


1.3.	Web Standards
Podemos definir Web Standards como conjunto de diretrizes e tecnologias que são definidas por organizações como o W3C (World Wide Web Consortium) e outras entidades relacionadas, e tem objetivo de garantir a consistência, acessibilidade e interoperabilidade da web. Esses padrões tem como objetivo garantir que os sites e aplicações web funcionem de maneira eficaz em diferentes navegadores, dispositivos e sistemas operacionais.
Como descrito pelo W3C (2014), “os padrões web promovem a compatibilidade entre navegadores e plataformas, assegurando que todos os usuários possam acessar conteúdo sem barreiras”.
Estes padrões e especificações para linguagens como HTML, CSS, e JavaScript, bem como práticas recomendadas para acessibilidade (como as diretrizes WCAG), estruturação de dados e protocolos da internet, como HTTP e HTTPS. O uso de Web Standards promove uma web mais aberta, confiável e inclusiva para todos
Web Standards são um conjunto de normas, recomendações e diretrizes que orientam a criação de sites acessíveis a todos.

Estes padrões web tem um papel essencial na criação de um ecossistema acessível e interoperável. Desenvolvidos pelo World Wide Web Consortium (W3C), eles 


garantem que tecnologias como HTML, CSS e JavaScript sejam implementadas de maneira consistente. 
Além disso uma das inovações mais importantes no campo dos padrões web é o HTML5. 
De acordo com Meyer (2011), "o HTML5 simplifica a integração de elementos multimídia, eliminando a necessidade de plugins externos". Isso levou à criação de experiências mais interativas e acessíveis na web moderna.
Além disso, os padrões web reforçam a importância da acessibilidade. 
Segundo Slatin e Rush (2003), "a acessibilidade na web é um componente-chave para garantir que pessoas com deficiências possam acessar informações e serviços online". Isso reflete um compromisso com a inclusão digital, alinhado aos princípios éticos do desenvolvimento web.

Seguir estes conjuntos de diretrizes possibilitar uma aplicação de qualidade e concisa que com certeza atendera as necessidades do público-alvo.  

















2.	RESUMO DAS CONDIÇÕES DO PROJETO
2.1 Visão do Produto: UrbanExplorer
UrbanExplorer é um aplicativo inovador dedicado a promover pontos turísticos em cidades de pequeno, médio e grande porte. Nosso objetivo é oferecer aos usuários uma experiência única e completa ao explorar suas cidades e destinos próximos, destacando atrações, eventos, restaurantes, hotéis e outras atividades locais que muitas vezes passam despercebidas.
Missão
Facilitar a descoberta dos tesouros escondidos de cada cidade, promovendo o turismo local e valorizando as culturas e experiências autênticas que cada local tem a oferecer.
Objetivos
•	Informação Detalhada: Fornecer descrições completas e atualizadas sobre atrações, eventos, restaurantes, hotéis e atividades locais.
•	Acessibilidade: Garantir que os dados sejam facilmente acessíveis a todos os usuários, independentemente de sua localização ou idioma.
•	Interatividade: Oferecer uma plataforma intuitiva e interativa onde os usuários possam compartilhar suas experiências e avaliações.
•	Sustentabilidade: Promover práticas turísticas sustentáveis que beneficiem a comunidade local e preservem o patrimônio cultural e natural.
Benefícios
•	Exploração Enriquecida: Melhore a experiência de viagem ao descobrir lugares e eventos que você talvez nunca conhecesse.
•	Conveniência: Encontre todas as informações de que precisa em um único lugar, desde onde comer até o que fazer.
•	Comunidade: Conecte-se com outros exploradores urbanos e compartilhe suas descobertas e dicas.
•	Atualizações em Tempo Real: Receba notificações sobre eventos e novas atrações em tempo real.

Frase de Efeito
"Descubra os tesouros escondidos da sua cidade!"
Com o UrbanExplorer, cada cidade se transforma em um novo mundo a ser descoberto. Seja você um residente local ou um visitante curioso, nosso aplicativo torna cada jornada uma aventura inesquecível.
https://miro.com/app/board/uXjVIZYdp3I=/
![image](https://github.com/user-attachments/assets/e310a77a-7127-483a-81f6-2b39dcff14e6)

![image](https://github.com/user-attachments/assets/80f305e0-71e1-4630-99b0-9a6532afe3a0)



![image](https://github.com/user-attachments/assets/8872cae6-522c-4bee-92cc-b9bb1298ee54)

2.1 Personas
https://miro.com/app/board/uXjVIYmwRMw=/

![image](https://github.com/user-attachments/assets/5d637c85-e779-42ad-9497-ba6ea5ac62b5)

Persona 1: João, o Viajante Urbano
•	Idade: 28 anos
•	Profissão: Analista de Marketing
•	Localização: São Paulo, Brasil
•	Objetivos:
o	Descobrir novos pontos turísticos em suas viagens a trabalho e lazer.
o	Encontrar restaurantes e eventos locais autênticos.
o	Compartilhar suas experiências e avaliações no aplicativo.
•	Frustrações:
o	Dificuldade em encontrar informações detalhadas sobre atrações menos conhecidas.
o	Falta de recomendações personalizadas.
Persona 2: Maria, a Moradora Curiosa
•	Idade: 35 anos
•	Profissão: Professora
•	Localização: Campinas, Brasil
•	Objetivos:
o	Explorar sua própria cidade e descobrir novos lugares para visitar com a família.
o	Participar de eventos locais e conhecer novas atividades culturais.
o	Conectar-se com outros moradores e trocar dicas e recomendações.
•	Frustrações:
o	Falta de informações atualizadas sobre eventos e atividades locais.
o	Dificuldade em encontrar opções de lazer acessíveis para toda a família.
Persona 3: Carlos, o Turista Internacional
•	Idade: 45 anos
•	Profissão: Engenheiro
•	Localização: Lisboa, Portugal
•	Objetivos:
o	Planejar viagens detalhadas para diferentes cidades do Brasil.
o	Encontrar hotéis, restaurantes e atrações que ofereçam uma experiência autêntica e local.
o	Receber recomendações personalizadas com base em suas preferências de viagem.
•	Frustrações:
o	Dificuldade em encontrar informações em seu idioma.
o	Falta de conhecimento sobre atrações menos populares, mas interessantes.
Persona 4: Ana, a Jovem Exploradora
•	Idade: 22 anos
•	Profissão: Estudante de Turismo
•	Localização: Rio de Janeiro, Brasil
•	Objetivos:
o	Descobrir novos lugares para visitar com amigos e aproveitar a vida noturna.
o	Encontrar atividades locais interessantes e inovadoras.
o	Compartilhar suas descobertas e aventuras nas redes sociais.
•	Frustrações:
o	Falta de opções de entretenimento para jovens.
o	Dificuldade em encontrar informações sobre eventos e promoções exclusivas.
Essas personas podem ajudar a direcionar o desenvolvimento do UrbanExplorer, garantindo que ele atenda às necessidades e expectativas de seus diferentes usuários. 
















2.3 Jornadas associadas
https://miro.com/app/board/uXjVIPOGsmg=/
Jornada de João, o Viajante Urbano

![image](https://github.com/user-attachments/assets/75b2c7c5-cbef-4759-847f-8af624ac8575)


1.	Exploração Inicial:
o	João baixa o aplicativo UrbanExplorer antes de uma viagem a trabalho.
o	Ele navega pelas categorias de atrações, eventos, restaurantes e hotéis, buscando recomendações locais.
2.	Planejamento da Viagem:
o	João cria um itinerário personalizado com base nas sugestões do aplicativo.
o	Ele usa filtros para encontrar restaurantes e eventos autênticos próximos ao seu hotel.
3.	Durante a Viagem:
o	João utiliza o mapa interativo do aplicativo para navegar até as atrações.
o	Ele compartilha suas avaliações e fotos das visitas diretamente pelo UrbanExplorer.
4.	Compartilhamento de Experiências:
o	De volta ao hotel, João escreve um review detalhado sobre sua experiência.
o	Ele interage com outros usuários, comentando nas avaliações deles e trocando dicas.
Jornada de Maria, a Moradora Curiosa
1.	Descoberta:
o	Maria ouve falar do UrbanExplorer através de um amigo e baixa o aplicativo.
o	Ela explora a seção de eventos para encontrar atividades culturais para ela e sua família.
2.	Planejamento do Fim de Semana:
o	Maria salva seus eventos favoritos e adiciona-os ao seu calendário no aplicativo.
o	Ela busca por restaurantes próximos às atrações que deseja visitar com seus filhos.
3.	Dia da Exploração:
o	Maria recebe notificações sobre os eventos que adicionou ao seu calendário.
o	Ela usa o aplicativo para descobrir mais detalhes sobre as atrações enquanto está no local.
4.	Feedback e Comunidade:
o	Maria avalia os eventos e atrações que visitou, deixando dicas para outros usuários.
o	Ela se junta a grupos dentro do aplicativo, conectando-se com outros moradores curiosos.
Jornada de Carlos, o Turista Internacional
1.	Planejamento da Viagem:
o	Carlos baixa o UrbanExplorer antes de sua viagem ao Brasil.
o	Ele utiliza a versão multilíngue do aplicativo para encontrar hotéis e atrações em São Paulo.
2.	Durante a Viagem:
o	Carlos usa o aplicativo para navegar pela cidade e encontrar restaurantes recomendados.
o	Ele participa de eventos locais e descobre pontos turísticos menos conhecidos.
3.	Interação e Avaliação:
o	Carlos escreve avaliações em português e inglês para ajudar outros turistas internacionais.
o	Ele compartilha suas experiências nas redes sociais diretamente pelo aplicativo.
4.	Recomendações Futuras:
o	Carlos recebe sugestões personalizadas para futuras viagens baseadas em suas preferências.
o	Ele continua a usar o UrbanExplorer para planejar suas próximas aventuras.
Jornada de Ana, a Jovem Exploradora
1.	Exploração Inicial:
o	Ana baixa o UrbanExplorer para descobrir novos lugares para visitar com seus amigos.
o	Ela explora as seções de vida noturna, eventos e atividades para jovens.
2.	Planejamento de Saídas:
o	Ana cria listas de lugares favoritos e compartilha com seus amigos dentro do aplicativo.
o	Ela busca promoções exclusivas e eventos especiais.
3.	Durante as Saídas:
o	Ana utiliza o aplicativo para encontrar eventos e atividades em tempo real.
o	Ela compartilha suas experiências e fotos nas redes sociais diretamente pelo UrbanExplorer.
4.	Feedback e Comunidade:
o	Ana deixa avaliações detalhadas e dicas para outros jovens exploradores.
o	Ela se conecta com outros usuários que compartilham interesses semelhantes, formando novas amizades.
Essas jornadas ajudam a entender como o UrbanExplorer pode atender às necessidades variadas de seus usuários, proporcionando uma experiência rica e personalizada para cada persona. 


3.0	URBANEXPLORER

https://emanoel2511.github.io/PI/

Video:

![image](https://github.com/user-attachments/assets/f4967780-aa3f-49fe-aa89-b57e09bf434d)
O UrbanExplorer é uma aplicação inovadora projetado para promover o turismo urbano e facilitar a exploração de cidades de pequeno, médio porte. Para garantir sua funcionalidade o projeto utiliza-se de linguagens HTML. CSS, PHP, JavaScript e para banco de dados MySQL. Ao selecionar a cidade que deseja visitar na imagem ou item de busca no final da página poderá ter uma visão geral da história do local, atrações, restaurantes, hotéis entre outros.

3.1 HTML (HyperText Markup Language) - Estrutura do UrbanExplorer
Definição
O HTML é a linguagem de marcação utilizada para estruturar páginas web. Ele define os elementos visíveis na interface do usuário, organizando o conteúdo de forma hierárquica e semântica.
Características - Semântico e Estrutural: HTML usa elementos específicos para estruturar o conteúdo corretamente.
Independente de Plataforma: Pode ser exibido em qualquer navegador moderno.
Interação com CSS e JavaScript: HTML fornece a estrutura básica para que essas tecnologias possam estilizar e manipular os elementos da página.
Aplicação no UrbanExplorer: Criação de páginas para exibir pontos turísticos, formulários para usuários cadastrarem avaliações e comentários, navegação intuitiva através de menus e links.

3.2 CSS (Cascading Style Sheets) - Estilo e Responsividade
Definição:
O CSS é responsável pelo design e apresentação do UrbanExplorer. Ele controla as cores, fontes, espaçamentos e adaptação do layout para diferentes dispositivos.
Características: Separação entre conteúdo e apresentação: O CSS mantém a estrutura do HTML limpa ao definir estilos separadamente.
Responsividade: Permite a adaptação do site para telas de diferentes tamanhos.
Flexibilidade: Suporta animações, efeitos visuais e personalizações avançadas.
Aplicação no UrbanExplorer: Definição de layouts atrativos para exibição de atrações e mapas, implementação de um design responsivo para dispositivos móveis, criação de animações sutis para melhorar a experiência do usuário.


3.2 PHP (Hypertext Preprocessor) - Backend e Processamento de Dados
Definição:
O PHP é uma linguagem de programação voltada para o backend, utilizada para processar informações, gerenciar usuários e interagir com bancos de dados.
Características: Execução no Servidor: Código PHP roda no servidor antes de enviar o HTML para o navegador.
Dinamismo: Permite a criação de páginas web interativas com conteúdo atualizado em tempo real.
Conectividade com Bancos de Dados: PHP é amplamente usado para acessar e manipular dados armazenados em sistemas como MySQL.
Aplicação no UrbanExplorer: Gerenciamento de usuários e autenticação segura, consultas dinâmicas sobre atrações e avaliações, interação com banco de dados para armazenar informações dos usuários.

3.3 JavaScript - Interatividade e Funcionalidade
Definição
O JavaScript é uma linguagem de programação que roda no navegador, permitindo a manipulação de elementos HTML e a criação de interatividade no site.
Características: Execução no Cliente: JavaScript roda diretamente no navegador do usuário, manipulação do DOM: Permite modificar elementos da página sem recarregar, integração com APIs: Pode consumir dados de serviços externos como mapas e previsão do tempo.
Aplicação no UrbanExplorer: Interatividade para buscas e filtros de atrações, validação de formulários antes de enviar dados, comunicação com APIs externas para exibir informações sobre eventos locais.
3.4 MySQL - Banco de Dados do UrbanExplorer
Definição
O MySQL é um sistema de gerenciamento de banco de dados relacional utilizado para armazenar e organizar as informações do UrbanExplorer.
Características
Alta escalabilidade: Suporta grandes volumes de dados, segurança e Integridade, implementação de proteção contra acessos não autorizados, consultas eficientes: Uso de índices para melhorar a busca de dados.

Aplicação no UrbanExplorer: Armazenamento de informações sobre usuários, pontos turísticos e avaliações, relacionamento entre tabelas para associar diferentes tipos de dados, geração de relatórios sobre tendências turísticas na plataforma.

3.5 Implementação da Aplicação: API de Cidades UrbanExplorer
Este documento descreve o código Node.js, detalhando sua funcionalidade, a linguagem utilizada, o endpoint da API, o uso de banco de dados e os benefícios da abordagem implementada.
Visão Geral
O código implementa um servidor HTTP simples utilizando Node.js. Sua principal função é expor um endpoint de API que retorna uma lista pré-definida de cidades em formato JSON.
Linguagem Utilizada no Backend
•	Linguagem: JavaScript
•	Ambiente de Execução: Node.js
O backend é construído utilizando JavaScript, executado sobre o ambiente Node.js. Ele utiliza o módulo http nativo do Node.js para criar o servidor e manipular requisições HTTP.

4. API: Endpoint e Funcionalidade
•	Endpoint: / Boituva/Camacan/ilhéus/etc
•	Método HTTP Suportado: GET (implicitamente)
•	Porta do Servidor: 3000 (configurada em server.listen(3000))
•	URL Completa Local: https://emanoel2511.github.io/ (cidade)
Funcionamento: Quando uma requisição HTTP GET é feita para o endpoint /api/cidades, o servidor responde com:
•	Status HTTP: 200 (OK)
•	Cabeçalhos: 
o	Content-Type: application/json (indicando que o corpo da resposta é JSON)
o	Access-Control-Allow-Origin: * (permitindo que a API seja acessada por qualquer origem)
•	Corpo da Resposta: Uma string JSON contendo um array de objetos, onde cada objeto representa uma cidade com os seguintes campos: 
o	id: (Número) Identificador único da cidade.
o	nome: (String) Nome da cidade.
o	estado: (String) Sigla do estado da cidade. 
o	link_destino: (String) Um URL associado à cidade. No código, todos os links apontam para https://emanoel2511.github.io/PI/php-urbanexplorer/cidades/.
Se qualquer outro URL for acessado no servidor (que não seja /api/cidades), o servidor responderá.


4.1 Uso de Banco de Dados (BD)

![image](https://github.com/user-attachments/assets/b0fa5dbb-a68a-4324-afdd-f7f4fa6d1a29)

O código não faz uso de nenhum sistema de gerenciamento de banco de dados (SGBD) externo ou interno.
Os dados das cidades estão:
•	Armazenados em memória: A lista de cidades é definida como uma constante (const cidades = [...]) diretamente no código-fonte.
•	Estáticos: Os dados são fixos e não podem ser alterados dinamicamente através da API (por exemplo, via requisições POST, PUT ou DELETE) sem modificar o código-fonte e reiniciar o servidor.

4.2 Benefícios da Abordagem Atual
A implementação atual, apesar de simples, oferece alguns benefícios no contexto adequado:
1.	Simplicidade e Facilidade de Entendimento:
o	O código é curto, direto e utiliza apenas recursos nativos do Node.js, tornando-o fácil de ler, entender e manter para funcionalidades básicas.
2.	Leveza e Desempenho para Dados Pequenos:
o	Não há dependências externas para gerenciar conexões com banco de dados, o que resulta em uma inicialização rápida e baixo consumo de recursos.
o	Para um volume pequeno e estático de dados, servi-los diretamente da memória é extremamente rápido.
3.	Prototipagem Rápida:
o	Excelente para criar protótipos ou mockups de APIs rapidamente, permitindo que desenvolvedores frontend comecem a consumir dados sem a necessidade de configurar um banco de dados completo.
4.	Configuração Mínima:
o	Não requer instalação, configuração ou gerenciamento de um SGBD, simplificando o deploy e a execução em ambientes de desenvolvimento.
5.	CORS Habilitado Globalmente:
o	A inclusão do cabeçalho Access-Control-Allow-Origin: * facilita o desenvolvimento e teste de aplicações frontend que consomem esta API de diferentes origens (domínios, portas).
6.	Autossuficiência:
o	O servidor é completamente autossuficiente, com os dados embutidos, o que pode ser útil para demonstrações simples ou aplicações onde os dados raramente mudam.

Considerações Adicionais (Limitações)
É importante notar que essa abordagem tem limitações significativas para aplicações mais complexas ou com dados dinâmicos:
•	Não Persistência dos Dados: Qualquer alteração nos dados (se o código fosse modificado para permitir isso) seria perdida ao reiniciar o servidor.
•	Escalabilidade Limitada: Manter grandes volumes de dados diretamente no código é impraticável e ineficiente.
•	Dificuldade de Gerenciamento de Dados: Adicionar, modificar ou remover dados requer edição direta do código-fonte e reinicialização do servidor.
•	Funcionalidades de Consulta Limitadas: Não há como realizar consultas complexas, filtragens avançadas ou ordenações nos dados sem implementar lógica adicional no código.
Para cenários mais robustos, a utilização de um banco de dados seria recomendada.





CONSIDERAÇÕES FINAIS
Ao realizar este projeto, concluímos que ele é um elemento fundamental na análise e desenvolvimento de sistemas, pois ele define a melhor direção e o escopo do trabalho a ser realizado. Além disso, ao focar em dispositivos móveis e tecnologias web, conseguimos atingir um público maior, oferecendo soluções acessíveis e versáteis. 
A integração de tecnologias móveis e baseadas na web é essencial para atender às necessidades modernas dos usuários, que demandam acesso a serviços e informações a qualquer momento e em qualquer lugar. Os sistemas desenvolvidos com foco em dispositivos móveis e web são naturalmente mais escaláveis e flexíveis, permitindo atualizações e melhorias contínuas sem a necessidade de grandes mudanças na infraestrutura. Além de mantermos a segurança dos dados dos usuários, que deve ser uma prioridade constante. 
Em resumo, o desenvolvimento de sistemas orientado a dispositivos móveis e baseados na web representa uma oportunidade significativa para criar soluções tecnológicas eficientes, escaláveis e voltadas para o usuário. Ao adotar boas práticas e focar na inovação contínua, é possível entregar produtos de alta qualidade que atendam às necessidades e expectativas dos usuários modernos.





REFERÊNCIAS

PRESSMAN, S. Roger. Engenharia de software. 3. ed. São Paulo: McGraw-Hill, 1995.
TANENBAUM, Andrew S.; VAN STEEN, Maarten. Sistemas Distribuídos: Princípios e Paradigmas. 2. ed. Pearson Education, 2016.

COULOURIS, George; DOLLIMORE, Jean; KINDBERG, Tim. Distributed Systems: Concepts and Design. 5. ed. Boston: Addison-Wesley, 2012.

BIRMAN, Kenneth P. Sistemas Distribuídos Confiáveis: Tecnologias, Serviços Web e Aplicações. Nova York: Springer, 2005.

WORLD WIDE WEB CONSORTIUM. Web standards: compatibility across platforms and browsers. 2014. Disponível em: <http://www.w3.org/standards/>. Acesso em: 15 mar. 2025.

MEYER, Eric A. HTML5 for Web Designers. 1. ed. New York: A Book Apart, 2011. 86 p. 
SLATIN, John M.; RUSH, Sharron. Maximum Accessibility: Making Your Web Site More Usable for Everyone. Boston: Addison-Wesley, 2003. 352 p

LEITE, Jair C. Engenharia de software: ciclos de vida. Universidade do Rio Grande do Norte, 2006.

SOMMERVILLE, Ian. Engenharia de software. 8. ed. São Paulo: Pearson Addison-Wesley, 2007.


