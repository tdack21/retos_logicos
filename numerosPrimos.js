/* 
  En este desafío te damos como entrada un número positivo mayor a cero y debes regresar un arreglo con todos los números primos menores
  o iguales a ese número de entrada ordenados de menor a mayor.
*/

function solution(num) {
  // Tu código aquí 👈
  let primes = [];
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (i == 2) {
      primes.push(i);
    }
    else {
      for (let e = 0; e < primes.length; e++) {
        if (i % primes[e] == 0) {
          count += 1;
        }
      }
      if (count == 0) {
        primes.push(i);
      }
      count = 0;
    }
  }
  return primes;
}

solution(5)
