
import teclado = require('readline-sync');
let titulo: string = teclado.question("Digite seu titulo : ");
let descricao: string = teclado.question("Digite a descrição do produto : ");

let html: string = "<html><head><title>.:Meu Site:.</title><scriptsrc='desafio.ts'></script></head><body><h1>" + titulo + "</h1><p>" + descricao + "</p></body></html>";

console.log(html)
 
