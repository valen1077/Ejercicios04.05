var numFila = 10;
var numCols = 10;
var numBut = numFila * numCols;
var butacas = [];
for (var i = 0; i < numFila; i++) {
    butacas.push(new Array(numCols).fill(true));
}
var numVac = Math.floor(numBut / 3);
for (var i = 0; i < numVac; i++) {
    var fila = void 0, col = void 0;
    do {
        fila = Math.floor(Math.random() * numFila);
        col = Math.floor(Math.random() * numCols);
    } while (!butacas[fila][col]);
    butacas[fila][col] = false;
}
var numOcup = 0;
for (var _i = 0, butacas_1 = butacas; _i < butacas_1.length; _i++) {
    var row = butacas_1[_i];
    for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
        var seat = row_1[_a];
        if (seat) {
            numOcup++;
        }
    }
}
console.log("Hay ".concat(numOcup, " butacas ocupadas y ").concat(numBut - numOcup, " butacas desocupadas."));
