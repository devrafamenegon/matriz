function multiplicaMatrizes(A: number[][], B: number[][]): number[][] {
  const n = A.length;
  const C: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

function testeMultiplicaMatrizes() {
  // Exemplo de uso:
  const A: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const B: number[][] = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ];

  const resultadoMultiplicacao = multiplicaMatrizes(A, B);
  console.log("Resultado da multiplicação das matrizes:");
  console.table(resultadoMultiplicacao);
}

testeMultiplicaMatrizes();
