````markdown
# Sistema de Operações com Matrizes

Este projeto implementa duas operações principais com matrizes quadradas: **Soma de Matrizes** e **Multiplicação de Matrizes**, utilizando TypeScript.

## Complexidade do Sistema

O sistema é capaz de realizar tanto soma quanto multiplicação de matrizes, sendo que cada operação possui uma complexidade diferente:

### Soma de Matrizes

- **Complexidade:** O(n²)
- A soma de duas matrizes de tamanho `n x n` envolve percorrer todos os elementos das duas matrizes e somá-los. Isso leva `n²` operações.

### Multiplicação de Matrizes

- **Complexidade:** O(n³)
- A multiplicação de duas matrizes de tamanho `n x n` é mais custosa, pois para calcular cada elemento da matriz resultante, é necessário fazer a soma dos produtos de uma linha de uma matriz com uma coluna da outra. Isso resulta em `n³` operações.

### Impacto no Sistema

Como as funções são separadas, a complexidade do sistema em si não muda com a introdução da multiplicação de matrizes. No entanto, a eficiência geral do sistema pode ser afetada dependendo da frequência com que a multiplicação é utilizada, já que ela é mais custosa computacionalmente que a soma.

Se as duas operações forem executadas em momentos distintos e não dependentes, o impacto pode ser mínimo. Contudo, se a multiplicação for usada com frequência, o tempo de execução do sistema aumentará devido à complexidade cúbica.

## Como rodar o projeto

Siga os passos abaixo para rodar o projeto em sua máquina.

### Passo 1: Instalar dependências

No diretório raiz do projeto, rode o seguinte comando para instalar as dependências necessárias (TypeScript):

```bash
npm install
```
````

### Passo 2: Rodar o script de multiplicação de matrizes

Para compilar e rodar o script de **multiplicação de matrizes**, use o seguinte comando:

```bash
npx tsc .\src\multiplica.ts
```

Após a compilação, execute o arquivo JavaScript gerado:

```bash
node .\src\multiplica.js
```

### Passo 3: Rodar o script de soma de matrizes

Para compilar e rodar o script de **soma de matrizes**, use o seguinte comando:

```bash
npx tsc .\src\soma.ts
```

Após a compilação, execute o arquivo JavaScript gerado:

```bash
node .\src\soma.js
```

## Estrutura do Projeto

- `src/multiplica.ts`: Contém o algoritmo de multiplicação de matrizes.
- `src/soma.ts`: Contém o algoritmo de soma de matrizes.

## Exemplo de Saída

### Multiplicação

```bash
Matriz Resultante da Multiplicação:
[ 30, 24, 18 ]
[ 84, 69, 54 ]
[ 138, 114, 90 ]
```

### Soma

```bash
Matriz Resultante da Soma:
[ 10, 10, 10 ]
[ 10, 10, 10 ]
[ 10, 10, 10 ]
```

## Licença

Este projeto está sob a licença MIT.

````

---

## Código Fonte

### `src/soma.ts` (Soma de Matrizes)

```typescript
function somaMatrizes(A: number[][], B: number[][]): number[][] {
    const n = A.length;
    const C: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    return C;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const resultadoSoma = somaMatrizes(matrizA, matrizB);
console.log("Matriz Resultante da Soma:");
resultadoSoma.forEach(row => console.log(row));
````

### `src/multiplica.ts` (Multiplicação de Matrizes)

```typescript
function multiplicaMatrizes(A: number[][], B: number[][]): number[][] {
  const n = A.length;
  const C: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrizB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const resultadoMultiplicacao = multiplicaMatrizes(matrizA, matrizB);
console.log("Matriz Resultante da Multiplicação:");
resultadoMultiplicacao.forEach((row) => console.log(row));
```

### Estrutura de Arquivos:

```
- src/
  - multiplica.ts
  - soma.ts
- package.json
- tsconfig.json
- README.md
```
