# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Herramientas usadas](#2-resumen-del-proyecto)
* [3. Funcionalidad de la Interfaz](#3-consideraciones-generales)
* [4. Hito: Criterios de aceptación mínimos del proyecto](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Recursos](#5-hito-opcional-mostrar-la-franquicia-de-tarjeta)

***

## 1. Preámbulo

Web basica para verificar el numero de una tarjeta utilizando un campo de texto que interactua con el algoritmo de Luhn.

## 2. Herramientas usadas

### HTML

### CSS

### JavaScript


## 3. Funcionalidad de la Interfaz

**1. Caracteristicas principales**

* La interface consta de 2 partes, un campo de texto para ingresar el numero de tarjeta y un boton para validar el numero
* El campo de texto no permite ingresar letras (a-Z) y oculta los digitos exceto por los ultimos 4 ingresados
* El boton valida el numero de tarjeta usando el algoritmo de Luhn lanzando una alerta indicando si es valida o no
* No se permite intentar validar si es que no hay ningun numero ingresado 
  
## 4. Hito Opcional: Mostrar la franquicia de tarjeta

Las partes opcionales tienen como intención permitirte profundizar un poco más
sobre los objetivos de aprendizaje del proyecto. Todo en la vida tiene pros y
contras, decide sabiamente si quieres invertir el tiempo en profundizar/
perfeccionar o aprender cosas nuevas en el siguiente proyecto.

En este hito 2 puedes, además de validar si el número de la
tarjeta es válida, mostrar la [franquicia](https://es.wikipedia.org/wiki/N%C3%BAmero_de_tarjeta_bancaria)
de la tarjeta (ej: Visa, MasterCard, etc)
usando estas [reglas de validación](https://stevemorse.org/ssn/cc.html).
Si escribes un nuevo método para eso, debes hacer las respectivas pruebas unitarias.


### Descripción de scripts / archivos

* `README.md`: Explicacion del producto.
* `src/index.html`: Punto de entrada a tu aplicación.
* `src/style.css`: Reglas de estilo
* `src/validator.js`: Codigo con el algoritmo de Luhn y la funcion de ocultar digitos en el campo de texto.
* `src/index.js`: Codigo para interactuar el el DOM y funcionalidad basica de la interfaz
* `test/validator.spec.js`: Tests que se uso para verficar el codigo.


## 5. Recursos

### Software Usado

1. [Code](https://code.visualstudio.com/)
2. [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell)
3. [Git bash](https://git-scm.com/download/win)


### Recursos usados

* [String a float](https://dirask.com/posts/JavaScript-convert-string-array-to-float-array-DWkWBD)
* [Funcionalidad de for](https://www.youtube.com/watch?v=11Fz65LQVB4)
* [Como revertir un numero](https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/)
* [Numero a string](https://www.freecodecamp.org/news/javascript-number-to-string-how-to-use-tostring-to-convert-an-int-into-a-string/#:~:text=The%20toString()%20method%20is,into%20its%20string%20type%20representation.)
* [Valor en campo de texto a variable](https://stackoverflow.com/questions/56246340/how-do-i-set-a-number-input-into-a-javascript-variable)
* [Acctivar y desactivar un boton](https://flexiple.com/javascript/disable-button-javascript/)
* [Aplicacion de Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [Aplicacion de EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
* [Esconder numeros usando Regex](https://stackoverflow.com/questions/66572966/hide-all-numbers-except-last-4-using-js-regex)
* [Centrar elementos usando CSS](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)
