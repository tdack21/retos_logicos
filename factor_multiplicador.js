/*
Vamos a tomar como base los números del 3 al 8 para multiplciarlos por un mismo factor desconocido (x) que nos da ciertos resultados.
Entonces, dada una función que recibe un array númerico con los resultados debes encontrar el factor multiplicador (x) para obtener ese resultado multiplicando por los números del 3 al 8.
Si si un solo factor multiplicador difiere del resto se regresa false.
*/

function solution(numbers) {
  let factor = [];
  let num3_8 = [3, 4, 5, 6, 7, 8];
  for (let i = 0; i < 6; i++) {
    factor[i] = numbers[i] / num3_8[i];
  }
  if (factor[0] == factor[1] && factor[0] == factor[2] && factor[0] == factor[3] && factor[0] == factor[4] && factor[0] == factor[5]) {
    return factor[0];
  }
  else {
    return false;
  }
}

solution(27, 36, 45, 54, 63, 72])
solution(27, 36, 45, 24, 63, 72])
