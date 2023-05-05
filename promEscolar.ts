import * as readlineSync from 'readline-sync';

class Alumno {
  constructor(public nombre: string, public notas: number[]) {
    if (notas.some(nota => typeof nota !== 'number')) {
      throw new Error('Las notas deben ser números.');
    }
  }

  promedio(): number {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
}

function cargarAlumno(): Alumno {
  const nombre = readlineSync.question('Ingrese el nombre del alumno: ');
  const notas: number[] = [];
  for (let i = 0; i < 3; i++) {
    const nota = parseFloat(readlineSync.question(`Ingrese la nota del trimestre #${i + 1} para ${nombre}: `));
    notas.push(nota);
  }
  return new Alumno(nombre, notas);
}

const numAlumnos = parseInt(readlineSync.question('Ingrese la cantidad de alumnos: '));
const alumnos: Alumno[] = [];
for (let i = 0; i < numAlumnos; i++) {
  const alumno = cargarAlumno();
  alumnos.push(alumno);
}

for (let i = 0; i < alumnos.length; i++) {
  for (let j = 0; j < alumnos.length - 1 - i; j++) {
    if (alumnos[j].promedio() < alumnos[j + 1].promedio()) {
      const temp = alumnos[j];
      alumnos[j] = alumnos[j + 1];
      alumnos[j + 1] = temp;
    }
  }
}

console.log('Alumnos ordenados por promedio:');
for (let i = 0; i < alumnos.length; i++) {
  const alumno = alumnos[i];
  console.log(`${alumno.nombre}: ${alumno.promedio()}`);
}