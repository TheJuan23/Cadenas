// Navegación del Menú
function mostrarEjercicio(ejercicioId) {
    document.querySelectorAll('.menu, .method').forEach(section => section.classList.remove('active'));
    document.getElementById(ejercicioId).classList.add('active');
}

function volverAlMenu() {
    document.querySelectorAll('.menu, .method').forEach(section => section.classList.remove('active'));
    document.getElementById('menuPrincipal').classList.add('active');
}

// Métodos de cadenas
function calcularLongitud() {
    const input = document.getElementById("inputLength").value;
    const resultado = `La longitud de la cadena es: ${input.length}`;
    document.getElementById("resultLength").textContent = resultado;
}

function obtenerCharAt() {
    const input = document.getElementById("inputChar").value;
    const index = parseInt(document.getElementById("indexChar").value, 10);
    const resultado = index >= 0 && index < input.length
        ? `El carácter en la posición ${index} es: '${input.charAt(index)}'`
        : "Índice fuera de rango.";
    document.getElementById("resultChar").textContent = resultado;
}

function extraerSlice() {
    const input = document.getElementById("inputSlice").value;
    const start = parseInt(document.getElementById("startSlice").value, 10);
    const end = parseInt(document.getElementById("endSlice").value, 10);
    const resultado = input.slice(start, end);
    document.getElementById("resultSlice").textContent = `Subcadena extraída: '${resultado}'`;
}

function convertirMayusculas() {
    const input = document.getElementById("inputUpper").value;
    const resultado = input.toUpperCase();
    document.getElementById("resultUpper").textContent = `En mayúsculas: '${resultado}'`;
}

function dividirCadena() {
    const input = document.getElementById("inputSplit").value;
    const separator = document.getElementById("separatorSplit").value;
    const resultado = input.split(separator);
    document.getElementById("resultSplit").textContent = `Resultado dividido: [${resultado.join(", ")}]`;
}
