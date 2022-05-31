/*window.onload = function() {
    permisoConducir();
};*/


//1. Declare una variable de tipo String(Texto , Cadena ) sin inicializarla

var pizza;

//2. Declare una variable de tipo numérico y coloque el valor de 20.

var pizza = 30;

//3. Declare dos variables con dos valores , declare una variable adicional y obtenenga en ella el resultado de sumas los dos valores

var pizza = 30;
var coca = 45;

var total = coca + pizza;

console.log(total);

//4. Como hace comentarios en JS??

//Comentarios de una sola linea
/* Comentarios largos de varias lineas */

//5. Como envia mensajes a la consola en JS

console.log(total);

//6. Crea un array llamado MisHobbies y agregue 15 valores con sus Hobbies o cosas que le gusta hacer.

var MisHobbies = ["comer", "dormir", "pintar", "dibujar"];

//7. Cree un objeto llamado persona con los siguientes atributos nombre , edad , genero, música(Genero que mas le gusta ),Pasatiempo, TieneHijos(boolean), Nacionalidad,cedula .

var persona = {
    nombre: "Pepe Grillo",
    edad: 28,
    genero: "masculino",
    musica: "trova",
    pasatiempo: "meter la pata",
    tieneHijos: false,
    nacionalidad: "Irlandes",
    id: 115550776,
};

//8. Cree un arreglo de objetos con los atributos del ejercicio 5 pero de diferentes personas al menos.

var personas = [

    {
        nombre: "Pepe Grillo",
        edad: 27,
        genero: "masculino",
        musica: "trova",
        pasatiempo: "meter la pata",
        tieneHijos: false,
        nacionalidad: "italiano",
        id: 441584,
    }, {
        nombre: "Gepetto",
        edad: 82,
        genero: "masculino",
        musica: "heavy metal",
        pasatiempo: "carpintero",
        tieneHijos: true,
        nacionalidad: "italiano",
        id: 123456,
    }, {
        nombre: "Pinoccio",
        edad: 12,
        genero: "masculino",
        musica: "kpop",
        pasatiempo: "mentir",
        tieneHijos: false,
        nacionalidad: "italiano",
        id: 011010,
    }, {
        nombre: "Gepetto",
        edad: 82,
        genero: "masculino",
        musica: "heavy metal",
        pasatiempo: "carpintero",
        tieneHijos: true,
        nacionalidad: "italiano",
        id: 654321,
    }, {
        nombre: "Gepetto",
        edad: 82,
        genero: "masculino",
        musica: "heavy metal",
        pasatiempo: "carpintero",
        tieneHijos: true,
        nacionalidad: "italiano",
        id: 653412,
    }
];

//9. Utilice console para mostrar la información del ejercicio 6.

console.log(MisHobbies);

//10. Utilice console para mostrar el ultimo y el primer resultado.


console.log(MisHobbies[3]);

//11. Utilice console para mostrar la información del ejercicio 7

console.log(persona);

//12. Utilice console para mostrar la información del ejercicio 7 únicamente la propiedad Nombre

console.log(persona.nombre);

//13. Utilice console para mostrar la información del ejercicio 8 filtre por el objeto 0 y muestre todas las propiedades

console.log(personas[0]);

//14. Utilice console para mostrar la información del ejercicio 8 filtre por el objeto 0 y la propiedad nombre

console.log(personas[0].nombre);

//15. Muestre la información del ejercicio 8 en un forech

for (let index = 0; index < 8; index++) {

    console.log(personas[index]);

}

//Ejercicios IF

//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

function permisoConducir() {

    //Tomar la edad del usuario: 
    let edad = prompt("Ingrese su edad");

    //Revisar si es mayor: 
    if (edad >= 18) {

        console.log("Puede conducir");
    }

    //Si el numero es impar:
    else {
        console.log("No puede conducir");
    }
};

permisoConducir();

//2. Pide una nota (número). Muestra la calificación según la nota:

function nota() {

    let nota = prompt("Ingrese el primer valor");

    if (nota >= 70) {
        alert('aprobado');
    } else {
        if (nota >= 50) {
            alert('Puede mejorar');
        } else {
            alert('reprobado');
        }
    };

};

//3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

function concatenar() {

    let palabra = prompt('Ingrese una palabra')

}