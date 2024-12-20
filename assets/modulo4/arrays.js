var miArreglo = ["Hola", "Mundo", 7]; //Arreglo con 3 valores

var miArreglo = []; //Arreglo vacío

miArreglo[0] = "Hello"; //Cambiamos el string del primer valor
miArreglo[1] = miArreglo[1] + "!"; //Agregamos un ! al valor original
miArreglo[2] = 24 / 4; //Cambiamos al resultado de una operación

var miArreglo = ["Hola", "Mundo", 7];
var longitud = miArreglo.length; //3
console.log(miArreglo[miArreglo.length - 1]);//Esta línea imprime el último elemento del arreglo (el elemento con índice 2) en la consola

var miArreglo2 = ["Hola", "Mundo", 7];
miArreglo2.pop(); //Se elimina el 7

var miArreglo3 = ["Hola", "Mundo", 7];
miArreglo3.push("nuevo"); //El arreglo ahora es ["Hola", "Mundo", 7, "nuevo"]

var miArreglo4 = ["Hola", "Mundo", 7];
var primero = miArreglo4.shift(); //["Mundo", 7]

var miArreglo5 = ["Hola", "Mundo", 7];
miArreglo5.unshift(5); //[5, "Hola", "Mundo", 7];

//.splice(indice, n. de elementos, valores): Agrega y borra elementos de acuerdo a su posición. Regresa un arreglo con los elementos borrados. El primer parámetro es el índice en donde se agregarán elementos, 
// el segundo es el número de elementos a eliminar y los siguientes son los valores que se agregan
var miArreglo6 = ["Hola", "Mundo", 7];
var borrados = miArreglo6.splice(1, 2, 8, "world"); //["Hola", 8, "world"]

//Si no ponemos parámetros con valores para agregar, podemos usarlo para eliminar elementos en posiciones específicas:
var miArreglo7 = ["Hola", "Mundo", 7];
miArreglo7.splice(1, 1); //miArreglo = ["Hola", 7]

//.slice(índice inicial, índice límite): Similar a .splice pero no elimina ni agrega elementos. Sólo accede a porciones
//  específicas de un arreglo y las regresa. Puede tener hasta dos parámetros, ambos índices del arreglo que serán el 
// intervalo de elementos a copiar. El segundo parámetro es el límite, si sólo hay uno, copia todo a partir del primer índice.
var miArreglo = ["Hola", "Mundo", 7];
var miArreglo2 = miArreglo.slice(1, 2); // miarreglo2 = ["Mundo"];
var miArreglo3 = miArreglo.slice(0, 2); // miarreglo3 = ["Hola", "Mundo"];
var miArreglo4 = miArreglo.slice(1); // miarreglo4 = ["Mundo", 7];

