"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Alumno = /** @class */ (function () {
    function Alumno(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
        if (notas.some(function (nota) { return typeof nota !== 'number'; })) {
            throw new Error('Las notas deben ser números.');
        }
    }
    Alumno.prototype.promedio = function () {
        return this.notas.reduce(function (a, b) { return a + b; }, 0) / this.notas.length;
    };
    return Alumno;
}());
function cargarAlumno() {
    var nombre = readlineSync.question('Ingrese el nombre del alumno: ');
    var notas = [];
    for (var i = 0; i < 3; i++) {
        var nota = parseFloat(readlineSync.question("Ingrese la nota del trimestre #".concat(i + 1, " para ").concat(nombre, ": ")));
        notas.push(nota);
    }
    return new Alumno(nombre, notas);
}
var numAlumnos = parseInt(readlineSync.question('Ingrese la cantidad de alumnos: '));
var alumnos = [];
for (var i = 0; i < numAlumnos; i++) {
    var alumno = cargarAlumno();
    alumnos.push(alumno);
}
var nombreBuscado = readlineSync.question('Ingrese el nombre del alumno a buscar: ');
var alumnoBuscado = alumnos.find(function (a) { return a.nombre === nombreBuscado; });
if (alumnoBuscado) {
    var promedio = alumnoBuscado.promedio();
    console.log("El promedio anual de ".concat(alumnoBuscado.nombre, " es ").concat(promedio, "."));
}
else {
    console.log("No se encontr\u00F3 al alumno ".concat(nombreBuscado, "."));
}
