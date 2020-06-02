# torpe :cursing_face:
## Sistema Manual de Tradução e Classificação de Termos  dos Léxicos ANEW e AFFIN para Analise de Sentimentos
* Objetivo geral : 
  Implementar um tradutor e classificador manual de anotações dos léxicos ANEW e AFFIN que utilize a API do Google Translate para sugerir traduções e casos de uso, além disso o sistema deve possuir ferramentas auxiliares para os anotadores compreenderem melhor o contexto de palavras e expressões idiomáticas;
* Passos de implementação :
  - [ ] 1. Criar uma interface gráfica simples e amigavél da tela principal da aplicação;
    - [ ] 1.1 A tela de Anotações foi criada mais os componentes ainda não foram conectados ao banco de dados;
    
    - [ X ] 1.2 _A tela de anotações está com todos componentes renderizados, falta incluir somente o titulo de cada sensor de sentimento e ajustar o layout_
    - [ ] 1.3 _Adicionar um campo com as informações do anotador e do corpus_
    - [ ] 1.3 _Adicionar um campo com status atual da anotação_
    - [ ] 1.4 _Aplicar layouts responsivos para utilizar o sistema em ambiente mobile_
  - [ ] 2. Conectar as informações ao banco de dados:
    
    - [ ] 2.1 _utilizar o código do FAMA como base_
  - [ ] 3. Criar uma tela de autenticação de usuário;
* Problemas :
  ~~A tela não está renderizando e não acusa erro no console ou no navegador, o problema começou quando a tela de anotações foi atualizada pela última vez;~~
  _Renderizei o componente para anotação dos sentimentos em um arquivo separado e refiz a estrutura de 'divs' da view anotação e isto parece ter solucionado o problema_

_desenvolvido por: Maicon de Menezes | ver: 0.1b | mdmoliveira@inf.ufpel.edu.br | **maio de 2020**_
