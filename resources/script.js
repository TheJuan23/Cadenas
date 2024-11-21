// Ejemplo 1: length
function calcularLongitud() {
    const input = document.getElementById("inputLength").value;
    const resultado = `La longitud de la cadena es: ${input.length}`;
    document.getElementById("resultLength").textContent = resultado;
}

// Ejemplo 2: charAt()
function obtenerCharAt() {
    const input = document.getElementById("inputChar").value;
    const index = parseInt(document.getElementById("indexChar").value, 10);
    const resultado = index >= 0 && index < input.length
        ? `El carácter en la posición ${index} es: '${input.charAt(index)}'`
        : "Índice fuera de rango.";
    document.getElementById("resultChar").textContent = resultado;
}

// Ejemplo 3: slice()
function extraerSlice() {
    const input = document.getElementById("inputSlice").value;
    const start = parseInt(document.getElementById("startSlice").value, 10);
    const end = parseInt(document.getElementById("endSlice").value, 10);
    const resultado = input.slice(start, end);
    document.getElementById("resultSlice").textContent = `Subcadena extraída: '${resultado}'`;
}

// Ejemplo 4: toUpperCase()
function convertirMayusculas() {
    const input = document.getElementById("inputUpper").value;
    const resultado = input.toUpperCase();
    document.getElementById("resultUpper").textContent = `En mayúsculas: '${resultado}'`;
}

// Ejemplo 5: split()
function dividirCadena() {
    const input = document.getElementById("inputSplit").value;
    const separator = document.getElementById("separatorSplit").value;
    const resultado = input.split(separator);
    document.getElementById("resultSplit").textContent = `Resultado dividido: [${resultado.join(", ")}]`;
}
