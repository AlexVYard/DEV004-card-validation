const validator = {
  
  /*
        if (input.length <= 4) return input;
        const last4Characters = input.substr(-4);
        const maskingCharacters = input.substr(0, input.length - 5).replace(/\d/g, '🐱');
        return `${maskingCharacters}${last4Characters}`;
    }
  */
    
  // Algoritmo de Luhn
  // Dividimos el numero para trabajar con los digitos que necesitamos
 
  isValid(input)  {
    const numeroString = input.toString();
    let numeroRevertido = numeroString.split('').reverse();

    console.log(numeroRevertido)

    // Loop para operar los numeros pares
    for (let i = 0 ; i < numeroRevertido.length ; i++) {
      if ((i + 1) % 2 === 0) {
        numeroRevertido[i] = numeroRevertido[i] * 2
        if (numeroRevertido[i] > 9) {
          numeroRevertido[i] = numeroRevertido[i] - 9
        } 
      }  
    }

    console.log("El numero despues de ser operado es: "+numeroRevertido)

    // Pasamos todos los numeros de string a float (incluso los que ya estaba en float)
    numeroRevertido = numeroRevertido.map(parseFloat)
    console.log(numeroRevertido)
      
    // Sumamos los numeros
    let numeroSumado = 0;

    for (let i = 0 ; i < numeroRevertido.length ; i++) {
      numeroSumado += numeroRevertido[i];
    }
    console.log(numeroSumado)

    if (numeroSumado % 10 === 0) {
      return true
    }  else  {
      return false
    }


  }
  ,
  maskify(input) { 
            
    return input.slice(0,-4).replace(/[\w+]/g, "#") + input.slice(-4) ;
        
  } 

}

export default validator;



