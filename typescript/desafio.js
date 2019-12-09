"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var titulo = teclado.question("Digite seu titulo : ");
var descricao = teclado.question("Digite a descrição do produto : ");
var html = "<html><head><title>.:Meu Site:.</title><scriptsrc='desafio.ts'></script></head><body><h1>" + titulo + "</h1><p>" + descricao + "</p></body></html>";
console.log(html);
