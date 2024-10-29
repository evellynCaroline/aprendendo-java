
function Somar(){
    console.log('aqui');
    var n1 = parseFloat(document.getElementById('um').value);
    var n2 = parseFloat(document.getElementById('dois').value);

    var soma = n1 * n2;

    var res = document.getElementById('resultado');

    res.innerHTML = "O resultado é "+soma;

}


function Calcular(){

    var n1 = parseFloat(document.getElementById('distancia').value);
    var n2 = parseFloat(document.getElementById('cda').value);
    var n3 = parseFloat(document.getElementById('valorP').value);

    var calc = 15.946 * Math.sqrt(n1 * n2);

    var valorMed = document.getElementById('resultado');

    if(calc <= valorP){
        valorMed.innerHTML = "O resultado é "+ calc + "Velocidade ok!";
        valorMed.style.color = "green";
    }
    else{
        veloMed.innerHTML = "O resultado é "+ calc + "Esta acima da velocidade permitida!!!!";
        veloMed.style.color = "red";
    }

   
}