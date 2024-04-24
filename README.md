# PROJETO DE DESENVOLVIMENTO WEB

## MyPastry App

**Integrantes do Grupo:**

> **20220631** – Joaquim  Manuel Igreja Cláudio

> **20220481** – Laís da Silva Ferreira

> **20220672** - Mário George Morais de Oliveira Igreja


- [x] Volume 1 - PROPOSTA
- [x] **Volume 2 - PROTÓTIPO**
- [ ] Volume 3 - PRODUTO
___

## SUMÁRIO

- [Descrição](#descrição)
- [Problemática](#problemática)
- [Hipótese](#hipótese)
- [Objetivos](#objetivos)
  - [Geral](#geral)
  - [Específicos](#específicos)
- [Sistemas de Informação Geográficos]()
- [Especificações Técnicas]()
  - [O Web site (Front-End)]()
  - [O servidor Web (Back-End)]()
  - [Base de dados]()
 
## DESCRIÇÃO

MyPastry App é uma proposta de uma aplicação Web, que será desenvolvida no âmbito da cadeira de Projeto de Desenvolvimento Web.

A ideia do projeto é desenvolver uma aplicação para uma Pastelaria, que seja capaz de criar uma melhor interação entre os clientes e a loja, o que servirá como 'hipótese' de solução para alguns problemas operacionais que identificamos durante o nosso estudo de campo, que será mais bem detalhado nas secções seguintes.

Para implementar a nossa aplicação Web escolhemos uma pastelaria situada na freguesia de Benfica - Lisboa, conhecida por Petiscos de Boteco, que comercializa tipicamente produtos originários do Brasil, de diferentes tipos e categorias, visitada maioritariamente por jovens da vizinhança. Pretendemos, com isso, diversificar a forma como aquela pastelaria atende e interage com os seus clientes.

Por serem, tipicamente, jovens os clientes que mais frequentam a pastelaria, definimos como público-alvo estes clientes e, para expandir a clientela e aumentar os rendimentos daquele estabelecimento, definimos também como público-alvo, maioritariamente, pessoas de origem brasileira que, embora longe de casa, desejem saborear-se dos típicos sabores brasileiros.


## PROBLEMÁTICA

Através de um estudo de campo, foi possível levantar os seguintes problemas operacionais e geográficos que representam grandes desafios para o desempenho das atividades comerciais daquela pastelaria:

1. **Estabelecimento com pequenas dimensões:** limita significativamente o número de clientes que é possível prestar atendimento em simultâneo, e como as únicas formas de atendimento são o atendimento presencial e as encomendas feitas mediante chamada telefônica, isso acaba por afetar, negativamente, o volume de vendas;

2. **Formas de atendimento ineficientes:** a pastelaria realiza apenas atendimento presencial ou por encomenda mediante chamada telefônica, o que resulta na perda da clientela que prefere outras formas de atendimento mais cômodas, rápidas e seguras;

3. **Demora no atendimento e preparação dos pedidos:** a grande maioria dos clientes daquela pastelaria realizam os seus pedidos de forma presencial, o que acaba aumentando significativamente o tempo de espera por parte dos clientes;

4. **Lista de produtos (cardápio) inacessível:** a pastelaria não possui nenhuma das formas típicas de apresentação dos seus produtos, o que pode ser inconveniente no momento da escolha dos produtos, principalmente para novos clientes que desconhecem os seus produtos.


## HIPÓTESE

Para solucionar os diversos problemas anteriormente citados, apresentamos a aplicação Web **'MyPastry'** que servirá de ferramenta para aplicar as seguintes soluções:

1. **Dimensões do estabelecimento:** o cliente terá a possibilidade de realizar o seu pedido pela aplicação, através do navegador do seu dispositivo, aderindo a uma das duas ***novas*** formas de atendimento:
   - ***Pedido Delivery:*** Poderá realizar o seu pedido na App e recebê-lo no conforto da sua residência ou nalgum outro endereço que indicar.
   - ***Pedido Mobile:*** Poderá realizar o seu pedido na App antes mesmo de chegar no restaurante, o que permite reduzir o tempo que uma mesa ou um lugar fica ocupado.
     
2. **Atendimento ineficiente:** com a implementação da App, espera-se que a pastelaria consiga incluir a sua 'lista de clientes' as pessoas que preferem comprar produtos pela internet com a segurança de usarem o seu próprio *smartphone* ou *laptop* e poder ter um melhor controlo e registo das suas compras.

3. **Atendimento demorado:** com a possibilidade de os clientes poderem realizar os seus pedidos pela App e levantar no restaurante - ***Pedido Mobile*** - o restaurante ganha mais tempo para preparar esses pedidos enquanto o cliente não chega ao restaurante.

4. **Lista de produtos (cardápio):** além das funcionalidades citadas anteriormente, o cliente poderá ainda usar a App apenas para aceder a lista de produtos que aquela pastelaria comercializa.
   

## OBJETIVOS

### Geral

Implementar uma aplicação Web denominada **'MyPastry'** que, dentre outras funcionalidades, permitirá aos gestores e funcionários da loja, proporcionar aos seus clientes uma melhor experiência ao usufruir dos seus serviços.


### Específicos

A proposta desta aplicação propõe-se a alcançar os seguintes objetivos:
- Melhorar a interação entre o cliente e o restaurante;
- Implementar formas de atendimento mais eficientes e cômodas;
- Proporcionar uma melhor experiência de serviço ao cliente;
- Reduzir o tempo de atendimento e, consequentemente, o tempo que o cliente passa dentro do restaurante;
- Permitir que os clientes consigam acumular pontos sempre que realizarem pedidos pela App, servindo também como um incentivo para que os clientes utilizem a App;
- Permitir ao administrador levantar dados estatísticos referentes as preferências dos clientes que realizam pedidos pela app.


## SISTEMAS DE INFORMAÇÃO GEOGRÁFICOS – Integração

Além de ser obrigatório como requisito de avaliação da UC, para o bom funcionamento da Aplicação é indispensável que sejam utilizados os conceitos e aplicações dos SIG, para a implementação dos aspetos operacionais da app e da loja.

Existem, inicialmente, dois cenários em que seria extremamente necessário recorrer a um mapa para garantir que os procedimentos funcionem corretamente. Estes cenários são:

 - **Pedido Mobile:** quando o utilizador realiza um pedido mobile, a aplicação tem de ser capaz de “ler” a localização geográfica atual do utilizador e guiá-lo até o restaurante e, para determinar o momento mais adequado para notificar o restaurante para que o seu pedido comece a ser preparado. Ou seja, o pedido não começa a ser preparado imediatamente a seguir a confirmação do pagamento, é necessário garantir que o utilizador esteja suficientemente perto do restaurante para levantar o seu pedido imediatamente quando este estiver “pronto” para levantar.

   O utilizador terá também a opção de permitir que outra pessoa ou entidade levante o seu pedido, para estes casos o pedido começa a ser preparado imediatamente a seguir a 
   confirmação do pagamento.

 - **Pedido Delivery:** para este tipo de pedido seria imprescindível recorrer a um mapa, que seja capaz de guiar o entregador (responsabilidade do restaurante) até o endereço de entrega definido pelo utilizador durante a realização de um pedido delivery.

Com isso, torna-se evidente a importância de recorrermos aos SIG para
o bom funcionamento do projeto

---

## ESPECIFICAÇÕES TÉCNICAS

Esta aplicação Web será desenvolvida de acordo com os requisitos e especificações apresentados pelos docentes das UCs envolvidas neste projeto académico.
Com isso, apresentam-se a seguir as tecnologias que darão suporte a esta solução:

>___O Web site (Front-End)___

Toda a componente de visualização da Web App será desenvolvida utilizando as seguintes tecnologias:
- **HTML 5:** Estrutura (esqueleto) das páginas Web.
- **CSS 3:** Estilização e harmonização das páginas Web.
- **JavaScript:** Recursos interativos e de ligação com o Back-End.

Serão também utilizadas Frameworks e Bibliotecas das mesmas tecnologias, como o **Bootstrap**, **JQuery**, **React**, etc. 

>___O servidor Web (Back-End)___

O server-side será completamente desenvolvido recorrendo a lingaguem de programação **JavaScript**, no Ambiente de Execução **Node.Js**. 
Será desenvolvida uma API RESTful para lidar com as requisições HTTP provenientes dos web clients (navegadores), e para padronizar a integração entre o Front-End e o Back-End.

Igualmente, serão utilizadas Frameworks e Bibliotecas de JavaScript, como **Express.Js**, **React**, entre outras, para dar robustez e impulsionar o desenvolvimento do server-side.

>___Base de Dados___

Para armazenar e garantir a persistência dos dados da nossa aplicação Web, será utilizado o **PostgreSQL** que é um sistema de gerenciamento de bases de dados relacional.



