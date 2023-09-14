
# Projeto Abrigos

Ol�! Voc� foi contratado para desenvolver um programa em Javascript que ajude a popula��o em situa��o de rua a encontrar abrigos tempor�rios em dias frios. O programa deve utilizar o comando `prompt` para receber dados de entrada dos usu�rios.

O programa deve permitir que o usu�rio encontre um abrigo tempor�rio na sua cidade, informando a sua localiza��o. Para isso, deve ser criado um banco de dados com informa��es dos abrigos dispon�veis no estado, como nome, endere�o, cidade, telefone e capacidade de lota��o.

O programa deve ter um menu com as seguintes op��es:

```
===== ABRIGOS TEMPOR�RIOS =====
1. Cadastrar abrigo
2. Listar abrigos
3. Procurar abrigo
4. Sair
Escolha uma op��o:
```

Ao selecionar uma op��o deve ser chamada uma fun��o que execute a respectiva a��o, conforme detalhamento abaixo:

**1. Cadastro de Abrigo:** essa op��o permite cadastrar um novo abrigo no sistema. O programa deve solicitar o nome, endere�o, telefone e capacidade de lota��o do abrigo. Os dados devem ser armazenados em um objeto e este objeto deve ser inclu�do em um `array` de abrigos.

**2. Listar Abrigos:** essa op��o lista todos os abrigos cadastrados no sistema, mostrando seus c�digos, nomes, endere�os, telefones e capacidade de lota��o. O c�digo � sempre a posi��o do objeto no `array`.

Exemplo:

```
--------------------
LISTAGEM DE ABRIGOS:
--------------------
C�DIGO |         NOME         |              ENDERE�O              |   TELEFONE   |  CAPACIDADE | CIDADE
-----------------------------------------------------------------------------------------------------------------
001    | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |   (11) 1234-5678 |     20  | Canoas
002    | Abrigo Esperan�a     | Rua da Solidariedade, 321, Bairro  |  (11) 9876-5432  |     30  | S�o Leopoldo
003    | Casa dos Amigos      | Av. da Fraternidade, 456, Centro   |  (11) 5555-4444  |     25  | Novo Hamburgo
004    | Abrigo do Bem        | Rua da Esperan�a, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
005    | Casa dos Anjos       | Av. da Paz, 159, Centro            |  (11) 3333-2222  |     15  | Porto Alegre
-----------------------------------------------------------------------------------------------------------------
```

**3. Procurar Abrigo:** essa op��o permite que o usu�rio encontre um abrigo tempor�rio na sua cidade, informando a sua localiza��o. O programa deve perguntar ao usu�rio a sua cidade e mostrar todos os abrigos cadastrados naquela cidade, com suas informa��es completas, al�m de informar a disponibilidade de vagas.

Exemplo:

```
Qual cidade voc� est�?
Canoas

--------------------
LISTAGEM DE ABRIGOS:
--------------------
C�DIGO |         NOME         |              ENDERE�O              |   TELEFONE   |  CAPACIDADE | CIDADE
---------------------------------------------------------------------------------------------------------
001    | Casa do Caminho      | Rua do Amanhecer, 123, Centro      |  (11) 1234-5678  |     20  | Canoas
004    | Abrigo do Bem        | Rua da Esperan�a, 789, Bairro      |  (11) 7777-8888  |     35  | Canoas
---------------------------------------------------------------------------------------------------------
```

**4. Sair:** o programa deve encerrar seu funcionamento.
