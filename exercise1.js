process.stdin.resume();
process.stdin.setEncoding("utf8");

function encontrarMayorFrecuencia(N, lista) {
  const contador = {};
  for (let i = 0; i < lista.length; i++) {
    if (contador[lista[i]] === undefined) {
      contador[lista[i]] = 1;
    } else {
      contador[lista[i]]++;
    }
  }

  let mayorFrecuencia = 0;
  for (const num in contador) {
    if (contador[num] > mayorFrecuencia) {
      mayorFrecuencia = contador[num];
    }
  }

  const numerosMayorFrecuencia = [];
  for (const num in contador) {
    if (contador[num] === mayorFrecuencia) {
      numerosMayorFrecuencia.push(parseInt(num));
    }
  }

  const res = Math.max(...numerosMayorFrecuencia);
  console.log(parseInt(res));
}

process.stdin.once("data", (chunk) => {
  var array = chunk.trim().split("\n");
  var N = parseInt(array[0]);
  var lista = array[1].split(" ").map(Number);

  encontrarMayorFrecuencia(N, lista);
});
