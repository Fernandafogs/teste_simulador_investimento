# teste_simulador_investimento

# Project Title: 
Challenge | Frontend Developer (Compound Interest App)

## Description:
The challenge is to build an application that simulates an investment using compound interest.
The application will have two screens:

FIRST SCREEN:
The first screen should have a form with the following fields: name, monthly investment, interest rate, contribution time, and a simulate button.
When the simulate button is clicked, a POST request should be made to the API http://api.mathjs.org/v4/ .
The request body should be a JSON with the following structure: { "expr": "" }. The mathematical expression for calculating compound interest should be placed in the expr field. The following formula should be used: 
[valor da mensalidade * (((1 + [taxa de juros]) ^ [tempo de contribuicao em meses] - 1) / [taxa de juros])].

Example:

If the parameters are:

Valor da mensalidade: R$ 20,00
Taxa de juros: 0,517% ao mês
Tempo de contribuição: 2 anos

The request body should be:

{ "expr": "20 * (((1 + 0.00517) ^ 24 - 1) / 0.00517)" }


SECOND SCREEN:
The second screen should display a text with the information from the name, monthly investment, time, and the result of the request.

Example:

Olá [nome], investindo R$[mensalidade] todo mês, você terá R$[resultado da request] em [tempo] sob uma taxa de juros de [taxa] ao mês.

## Prerequisites:
When the simulate button is clicked, a POST request should be made to the API http://api.mathjs.org/v4/ .

## Development:
The layout is free.
Using pure HTML, CSS, and JavaScript.
A GitHub repository has been created with commits added throughout the development process.

## Project Status:
Once the challenge is completed, the link to the repository and the live preview will be shared in the Discord community, under the "Test Evaluation" channel.

## Acknowledgements:
I would like to express my gratitude to Professor Thiago Medeiros for the excellent classes that have been fundamental in my new professional journey.





