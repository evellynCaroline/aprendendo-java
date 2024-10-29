console.log('ola mundo');

var nome = 'Evellyn'; //string
var sobrenome = 'Caroline'; 
var idade = 17; //variavel numerica
const i = 17; //uma const nao pode sofre alteraçao no valor
var aprovado = false;
var nomeCompleto = nome+' '+sobrenome;

var numero1 = 10;
var numero2 = 20;
/*
+soma
-subtraçao
*multiplicaçao
/divisao
% modulo
** Expoente
*/

var soma = numero1 + numero2;
var exp = 3 ** 2;
var mult = numero1 * numero2;
var sub = 3 - numero1;
var div = numero2 / numero1;

console.log(nomeCompleto);
console.log(soma);
console.log(exp);
console.log(mult);
console.log(sub);
console.log(div);

var a = 10;
var b = '10';

if(a == b){
    console.log('sao iguais');
}else{
    console.log('nao sao iguais');
}

if(b.isNaN){
    console.log('Nao é numero');
}else{
    console.log('é numero');
}

//exercicio 1 
/*
var c = 17;
var d = 20;
var e = 62;
var f = 89;

if(c < 18){
    console.log('menor de idade');

}if else (d >= 18 && <= 60){
    console.log('adulto')
}
if else (e > 60 && < 70){
    console.log('terceira idade, nao aposentado')
} 
}else{
    console.log('veio aposentado')
} 
if(f >= 70){
    console.log('veio aposentado');
}else{
    console.log('alma viva')
} 
*/

//exercicio 2

function IMC(peso, altura){
    imc = peso / (altura ** 2);
    return imc;
}

var l = IMC(60, 1.55);
console.log(l);

//exercico 3

for(var j = 0; j < 10; j++){
    console.log(j);
}

var n = 0;
while(n<10){
    console.log(n);
    n++;
}

var pesso ={
    nome:'Evellyn',
    idade:'17',
    profissao:'aluna',
    trauma:'sem money',

    salario: function(){
        console.log(5000);
    }
}
console.log(pesso.salario()); 