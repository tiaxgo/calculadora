function insert(num) {
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;

    }

    function clean () {

        document.getElementById('resultado').innerHTML = "";
    }

function back () {

    var resultado = document.getElementById('resultado');
    var conteudo = resultado.innerText;  /* Tem diferença quando usa-se innerText ou value, o fato de ser ou nao uma INPUT ou DIV*/ 
    /* abaixo função para apagar o ultimo numero digitado */
    if (conteudo.length > 0){
        resultado.innerText = conteudo.slice(0, -1);
    }

}

function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {

        document.getElementById('resultado').innerHTML  = eval(resultado);

    }
    else {
        document.getElementById('resultado').innerHTML = "Digite um numero...";
    }

}