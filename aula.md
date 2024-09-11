## Linguagem de programação

Maneira de dar instruções ao computador.

**Algoritmo**: Sequência de passos lógica e finita para resolução de um problema.

## Peças de uma linguagem
- Comentários 
- Declaração de variaveis (const,let)
- Operadores (atribuição,concatenação,matemáticos,lógicos)
- Tipos de dados (string,number,boolean)
- Estrutura de dados (functions,object,array)
- Controle de fluxo (if else)
- Estrutura de repetição (for,while,do while)

## Fases da resolução de um problema

Coletar os dados
Processar os dados (manipular,alterar...)
Apresentar os dados

## Escopo e Variáveis
Variáveis globais e locais 
Constantes

## Tipos de dados:
Strings (textos): que podem ser declarados com "" (quando for texto ou)
- Simples x Duplas
Para o JavaScript não faz diferença se você declara uma String com aspas simples ou duplas, para ele as duas maneiras são declarações válidas para uma String. A grande competição por escolher um ou outro é puramente por gosto particular de cada desenvolvedor, muitos preferem simples, porém, outros preferem duplas. Claro que ambos os casos temos vantagens e desvantagens.

## Vantagens das aspas duplas
Imagine que você precise escrever a seguinte String:

It’s a new game

Ou:

I’m a Front-End developer

Se estivermos utilizando aspas simples, para ambos as frases devemos escapar a aspa, da seguinte maneira:

console.log('It\'s a new game');
console.log('I\'m a Front-End developer');

Veja que é um pouco chato escrever esse código, porém, se você utilizar aspas duplas, esse escape não é necessário:

console.log("It's a new game");
console.log("I'm a Front-End developer");

Dessa maneira o código ficou mais limpo e simples de ser escrito.

## Vantagens das aspas simples
Mas, em contrapartida se você precisar destacar alguma palavra com aspas duplas, vai existir a mesma necessidade de escapar as aspas, por exemplo:

TypeScript é uma “linguagem” de programação

Para escrever essa frase com aspas duplas, assim como fizemos anteriormente, devemos escapar as aspas dentro da String:

console.log("TypeScript é uma \"linguagem\" de programação");

Esse exemplo é um pouco mais chato, pois, tem a necessidade de realizar dois escapes, um para cada aspa.

Porém, utilizando aspas simples, esse escape não é necessário:

console.log('TypeScript é uma "linguagem" de programação');

Portanto, ambas abordagens possuem seus pontos positivos e negativos.

Para evitar esse tipo de necessidade em realizar o escape podemos utilizar Template Literals também conhecido como Template String, da seguinte maneira:

console.log(`It's a new game`);
console.log(`I'm a Front-End developer`);
console.log(`TypeScript é uma "linguagem" de programação`);

Simplesmente trocamos as aspas por crases (também chamado de acentos graves).Declarando String's dessa forma, dificilmente será necessário realizar escapes para aspas, tanto dupla quanto simples.

Number: 2 1.4
Boolean: true / false
## Operadores 

Operadores de atribuição de valor ( = )
Operador de contatenação: é a junção de uma ou mais Strings

## Estruturas de dados:

## Arrays:
Uma lista que contém qualquer tipo de dado

## Objetos:
Atributos e Métodos
Criação e manipulação de objetos
Acesso a propriedade de objetos

## Function 
criar, passar argumento
executar 
arrow function / named function