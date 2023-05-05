

const numFila = 10;
const numCols = 10;
const numBut = numFila * numCols;

const butacas: boolean[][] = [];
for (let i = 0; i < numFila; i++) {
  butacas.push(new Array(numCols).fill(true));
}

const numVac = Math.floor(numBut / 3); 
for (let i = 0; i < numVac; i++) {
  let fila, col;
  do {
    fila = Math.floor(Math.random() * numFila);
    col = Math.floor(Math.random() * numCols);
  } while (!butacas[fila][col]); 
  butacas[fila][col] = false; 
}

let numOcup = 0;
for (const row of butacas) {
  for (const seat of row) {
    if (seat) { 
        numOcup++;
    }
  }
}

console.log(`Hay ${numOcup} butacas ocupadas y ${numBut - numOcup} butacas desocupadas.`);