import validator from './validator.js';

console.log(validator);


/*intento de crear una variable que tenga lo ingresado en el textbox
input.getElementById("cardnumber").addEventListener("oninput",maskpassword);

function maskpassword() {
  let password = document.getElementById("cardnumber").value
  console.log(password)
}
*/

/*intento de hacer que password field sea solo para numeros
window.addEventListener ("load", changeToPassword)

function changeToPassword() {
  setTimeout(function () {
      document.getElementById("cardnumber").setAttribute("type", "password")
  }, 500);
}
*/


    let input = document.querySelector(".input");
    let button = document.querySelector(".button");
        button.disabled = true;
        input.addEventListener("keyup", stateHandle);
     
    function stateHandle() {
      if(document.querySelector(".input").value === "") {
        button.disabled = true;
          } else {
        button.disabled = false;
      } 
    }
    
    let numeroEnmascarado = ""
    let numeroEnmascaradostring = ""
    let numeroTarjeta = 0
    let numeroTarjetaString = ""

    document.querySelector(".input").addEventListener("input", numeroaString);
    
    function numeroaString() {
      numeroEnmascarado = document.getElementById("cardnumber").value.replace(/^[a-z]+$/g, "") 
      numeroEnmascarado = validator.maskify(numeroEnmascarado) 
      console.log("La variable numeroEnmascarado es: "+numeroEnmascarado) 
      numeroEnmascaradostring = numeroEnmascarado.toString().split('') 
      
      console.log("La variable numeroTarjeta+9 es: "+numeroTarjeta) 
      numeroTarjetaString = numeroTarjeta.toString().split('') 
      console.log("El array en numeroTarjetaString es: "+numeroTarjetaString) 
      for (let i = 0 ; i <= numeroEnmascaradostring.length ; i++) {
        if ( numeroEnmascaradostring[i] >= 0 ) {
          numeroTarjetaString[i] = numeroEnmascaradostring[i]
        }
      }
      console.log("El nuevo array en numeroTarjetaString es: "+numeroTarjetaString)
      numeroTarjetaString = numeroTarjetaString.join("")
      numeroTarjeta = parseFloat(numeroTarjetaString)
      console.log("El numero ingresado es: "+numeroTarjeta)
      document.getElementById("cardnumber").value = numeroTarjeta 
    }

    /*let numeroIngresado = ""

    function numeroaString() {
      
      numeroIngresado = document.getElementById("cardnumber").value.replace(/^[^0-9]+$|\d(?=\d{4})/g, "*")
      
      console.log("El numero ingresado es = "+numeroIngresado);
      document.getElementById("cardnumber").value = numeroIngresado
    }
    */
    /*
    let lastChar = ""
    let numeroOriginal = ""
    console.log("El valor de lastChar es="+lastChar)

    function numeroaString() {

          lastChar = document.getElementById("cardnumber").value.slice(-1);
            console.log("El nuevo valor de lastChar es="+lastChar)
            numeroOriginal = numeroOriginal+lastChar
            console.log("El numero original es="+numeroOriginal)
      
      let numeroIngresado = document.getElementById("cardnumber").value
        console.log("El numero ingresado es ="+numeroIngresado)

      let numeroModificado = numeroIngresado.toString().split('');
        console.log("El numero modificado es ="+numeroModificado)

      for ( let i = 0 ; i <=numeroModificado.length ; i++) {
        if ( i <= 11)
          numeroModificado[i] = "*"
      }
      
      console.log("El nuevo numero modificado es ="+numeroModificado)
      
    }
    */
  /*REFERENCIA
    for (let i = 0 ; i <= numeroRevertido.length ; i++) {
    if ((i + 1) % 2 == 0) {
      numeroRevertido[i] = numeroRevertido[i] * 2
      if (numeroRevertido[i] > 9) {
        numeroRevertido[i] = numeroRevertido[i] - 9
      } 
    }  
  }*/

      /*
      let password = document.getElementById("cardnumber").value
      setTimeout(changePassword => {
        let passwordCambiado = (
        console.log(passwordCambiado)            
      }, 500);*/

    // Algoritmo de Luhn
  // Dividimos el numero para trabajar con los digitos que necesitamos
  document.getElementById("boton").addEventListener("click", validate);
  function validate() {
          numeroTarjeta = document.getElementById("cardnumber").value;
      let numeroString = numeroTarjeta.toString();
      let numeroRevertido = numeroString.split('').reverse();

          console.log(numeroRevertido)

  // Loop para operar los numeros pares
      for (let i = 0 ; i <= numeroRevertido.length ; i++) {
        if ((i + 1) % 2 == 0) {
          numeroRevertido[i] = numeroRevertido[i] * 2
          if (numeroRevertido[i] > 9) {
            numeroRevertido[i] = numeroRevertido[i] - 9
          } 
        }  
      }

  // Pasamos todos los numeros de string a float (incluso los que ya estaba en float)
      numeroRevertido = numeroRevertido.map(parseFloat)
      console.log(numeroRevertido)
      
  // Sumamos los numeros
      let numeroSumado = 0;
      for (let i = 0 ; i < numeroRevertido.length ; i++) {
        numeroSumado += numeroRevertido[i];
      }
      console.log(numeroSumado)

  // Verificacion que los numeros sean mutiplo de 10
      if (numeroSumado % 10 == 0) {
        alert("El numero ingresado es valido");
            } else {
        alert("El numero ingresado es invalido");
      }
   
    }

  
  
  