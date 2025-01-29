process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.once("data", (chunk) => {
  const array = chunk.trim().split("\n");
  const N = parseInt(array[0]);
  const lista = array[1].split(" ").map(Number);

  function maxDiferenciaAbsoluta(N, lista) {
    const maxNum = Math.max(...lista);
    const minNum = Math.min(...lista);
    return Math.abs(maxNum - minNum);
  }

  const res = maxDiferenciaAbsoluta(N, lista);
  console.log(parseInt(res));
});
