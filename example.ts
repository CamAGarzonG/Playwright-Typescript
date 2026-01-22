// ------------------------------------------------------
// Variables y Tipos Básicos
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Variables y Tipos Básicos");
console.log("------------------------------------------------------");

let edad: number = 25;
let edad2: number = 10;
let esActive: boolean = false;

// Operaciones
let sumar: number = edad + edad2 + 10;
let prom: number = sumar / 3;
let nombre: string = 'juan';
let full: string = nombre + ' ' + 'lopez';

console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${esActive}`);

// LET

//  as const  ---> el objeto o arreglo como un valor constante y los tipos serán inferidos como literales (constante inmutable)
const colores = ["rojo", "verde", "azul"] as const;

// ------------------------------------------------------
// Funciones y Funciones Flecha
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Funciones y Funciones Flecha");
console.log("------------------------------------------------------");

// Función tradicional con tipado de parámetros y retorno
function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Camilo"));

// 1. Función flecha básica
const suma = (a: number, b: number): number => {
    return a + b;
};
console.log(`Suma (2 + 3): ${suma(2, 3)}`);

// 2. Función flecha SIN paréntesis (un solo parámetro)
const cuadrado = (x: number) => x * x;
console.log(`Cuadrado de 4: ${cuadrado(4)}`);

// 3. Función flecha con cuerpo implícito (sin llaves ni return)
const tripleNum = (n: number): number => n * 3;
console.log(`Triple de 5: ${tripleNum(5)}`);

// 4. Función flecha en mapeo de arreglo
const numeros: number[] = [1, 2, 3, 4];
const dobles = numeros.map(n => n * 2);
console.log(`Dobles: ${dobles}`);


// ------------------------------------------------------
// Funcion Genéricos
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Genéricos");
console.log("------------------------------------------------------");

// Función genérica  
// <T>: Parámetro tipo genérico //  (valor: T): Parámetro llamado valor. TipoParámetro es T //: T: tipo de retorno de la función
function devolverLoMismo<T>(valor: T): T {return valor;}
function invertirArray<T>(arr: T[]): T[] {return arr.reverse();}

const numero = devolverLoMismo(10);
console.log(`Invertir [1,2,3]: ${invertirArray([1,2,3])}`);
console.log(`Invertir ['a','b','c']: ${invertirArray(['a','b','c'])}`);


// ------------------------------------------------------
// Condicionales y Ciclos
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Condicionales y Ciclos");
console.log("------------------------------------------------------");

// Condicional
if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
} else {
    console.log(`${nombre} es menor de edad.`);
}

// Ciclo for...of
for (let num of numeros) {
    console.log(`Número: ${num}`);
}

// ------------------------------------------------------
// Objetos, Interfaces y Tipado Avanzado
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Objetos, Interfaces y Tipado Avanzado");
console.log("------------------------------------------------------");

// Definición de una interfaz
interface Persona {
    nombre: string;
    edad: number;
    activo: boolean;
    direccion?: string; // Propiedad opcional
}

let persona: Persona = {
    nombre: "Ana",
    edad: 25,
    activo: false
};

console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}, Activo: ${persona.activo}`);

// Tipos personalizados (type alias)
type ID = number | string;
let idUsuario: ID = 123;
idUsuario = "abc123";
console.log(`ID de usuario: ${idUsuario}`);

// ------------------------------------------------------
// Clases y Herencia
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Clases y Herencia");
console.log("------------------------------------------------------");

// Clase básica
class Animal {
    public especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }

    public hablar(): void {
        console.log(`El ${this.especie} hace un sonido.`);
    }
}

let perro = new Animal("perro");
perro.hablar();

// Herencia
class Perro extends Animal {
    raza: string;

    constructor(raza: string) {
        super("perro");
        this.raza = raza;
    }

    hablar(): void {
        console.log(`El ${this.raza} ladra.`);
    }
}

let miPerro = new Perro("Labrador");
miPerro.hablar();

// ------------------------------------------------------
// Enums y Tuplas
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Enums y Tuplas");
console.log("------------------------------------------------------");

// Enum
enum Dia {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes
}

let diaHoy: Dia = Dia.Miercoles;
console.log(`Hoy es: ${Dia[diaHoy]}`);

// Tupla
let coordenada: [number, number] = [10, 20];
console.log(`Coordenada: x=${coordenada[0]}, y=${coordenada[1]}`);

//List
let num: number[]=[3, 4, 5, 6] //Arreglo de numeros;
let frutas: string[]=["pera", "manzana"] // Arreglo de cadena
let info: [string,string,number]=["zorro", "llave", 6]// Tupla;

console.log(frutas.length + " " + num[3]);


// ------------------------------------------------------
// Manejo de errores
// ------------------------------------------------------
console.log("------------------------------------------------------");
console.log("Manejo de errores");
console.log("------------------------------------------------------");

try {
    throw new Error("Esto es un error de ejemplo");
} catch (error) {
    console.log(`Error capturado: ${(error as Error).message}`);
}