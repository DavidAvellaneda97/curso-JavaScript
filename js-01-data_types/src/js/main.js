/*console.log("sesion js-01") -->


*
 Tipos de datos de JavaScript:
 - Objetos y primitivos
 - Los datos primitivos:
    * string
    * boolean
    * number
    * null
    * undefined
    * bigint
    * symbol
    > son inmutables, no tienen atributos ni métodos
- Objetos:
     tipo object
    {clave: valor, edad: 25, name: "pitufina"}
     tipo array
    [element_1 , element_2 , "Pitufinas", 38, {}, {}  ]
*/

// ================= Datos primitivos ==================
/*
 string: tipo de dato que rpresenta una secuencia de caracteres.
  Puede incluir textos, números, espacios, símbolos. Siempre se 
  define entre comillas.


*/
console.log("Kati sería unas pantunflas"); // se puede usar comillas dobles
console.log('Alberti sería unas botas de trabajo'); // se puede usar comillas simples
console.log(`Veronica sería unos mocasines`)// usando backticks (apostrofe grave) para Template Literals

/*
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.

  */
// Mostrar en console "El resultado de 3 * 4 = 12 pesos"
let valor1 = 3;
let valor2 = 4;

console.log("El resultado de " + valor1 + " * " + valor2 + " = " + valor1 * valor2 + " pesos. ");
console.log(`El resultado de ${valor1} * ${valor2} = ${valor1*valor2} pesos.`);

/*
 Tipos de datos number.

 - números positivos: 100, 1, 0.258
 - números negativos: -1 , .50.35
 - valores que no pueden ser representados numéricamente: NaN
 - número infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3) ); // 'number'
console.log( typeof ""); // string empty string
console.log( typeof " "); // 'string'
console.log( typeof 3* "pitufo trabajador" ); // 'NaN'
console.log( typeof (3*"pitufo trabajador") ); // 'number'
console.log( typeof (Nan) ); // 'number'
console.log( typeof +infinity ); // 'number'
console.log( typeof ( 3 + "viernes tematico") ); // 'string'
console.log( typeof ( "3viernes tematico") ); // 'string'
console.log( 4/0 ); // +infinity


/*
 Cuando se realizan operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
 
 Perdida precisión: No se pueden representar exactamente ciertos valores.
  típicamente en operaciones de números de punto flotate.
*/
console.log( `Perdida de precisión: 0.1 + 0. 2 = ${0.1 +0.2}`); // 0.300000000000004
console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`);9007199254740996