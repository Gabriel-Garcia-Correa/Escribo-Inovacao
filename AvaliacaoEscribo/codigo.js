function divisiveis(soma) { //Declara a função.
    y = 3 //Variável 3.
    z = 5 //Variável do 5.
    
    resto = 0 //Variável de resultado.
    
    if (x < 0){ //Checa se o número é positivo.
        console.log("Número inválido, insira apenas positivos.") //Informa o usuário do erro de variável.
    } else{
        for (var i = 0; i < x; i++) {
            if ((i % y === 0) || (i % z === 0)) //Checa se os números se encaixam nos parâmetros propostos.
                resto += i;   //Adiciona os números ao resultado.
         }
         console.log("A soma dos números divisíveis de 3 e 5 é: "+resto) //Mostra o resultado.
    }
      }
      x = 1
      x += parseInt(prompt("Informe o número da operação.")) //Pede o número da operação para o usuário.
      console.log(divisiveis(x)) //Chama a função.