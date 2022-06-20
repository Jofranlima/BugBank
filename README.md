# BugBank

**Estrutura do projeto**

1.  Pages - pasta do page objects com toda a estrutura de código;
2.  Fixtures - Aqui voce pode encontrar a massa utilizada para preenchimento do formulário;
3.  Integration - Nessa pasta é possivel ver o código responsável por rodar o arquivo com os casos de teste;
4.  Videos - pasta onde ficam as evidencias em vídeo dos testes;
5.  Screenshots - pasta onde ficam as evidencias quando um teste quebra. O Cypress automaticamente faz uma captura de tela nesse cenário;


**Para rodar o projeto existem os pré-requisitos**
- Pré-requisitos
Cypress >= 9.0.0
Node >= 10.0
Navegador Chrome, Edge, Firefox e etc



- Navegue ate a pasta do projeto e execute o comando;
	npm install --save-dev cypress@9.6.0
  
**Como rodar o projeto** 

1.  Apos instalar as dependencias rode o comando abaixo:

Npx cypress open

Sera aberta a interface do cypress onde é possivel selecionar o arquivo SignUp.spec.js que é responsável por rodar o projeto
