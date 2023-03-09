// const idade = 23;
// const profissao = `Programador`;
// // primeiro coloca uma const com para receber o id.
// const i = document.getElementById("pessoa"); 
// const j = document.getElementById(`pessoas`);
// // depois usa como um objeto que recebe uma String ou Integer seja qual for.
// if (idade == 21 && profissao == `Programador`) {
//   i.innerText = `Sou programador e tenho de 21 anos`;
// } else if (idade > 21 && profissao == `Programador`) {
//   i.innerText = `Sou maior de 21 anos e sou programador`;
// } else if (idade == 21 && profissao == `Programador`) {
//   i.innerText = `Não sou maior de 21 e sou programador`;
// } else if (idade == 21 && profissao == `Programador`) {
//   i.innerText = `Sou maior de 21 anos e não  sou programador`;
// } else {
//   i.innerText = `Sou menor de 21 anos e não  sou programador`;
// }

// j.innerText = `s`;

// const str = `Henrique`;
// const arr = str.split(`\n`);
// console.log(arr);

// const numeros = [``]; for (i=0; i<6; i++){numeros[i] = i; i==5 ? console.log(`Interando: `+numeros):0}

// numeros.push(6,7,8,9);
// console.log(`Push: `+numeros);
// numeros.unshift(10,11,12);
// console.log(`Unshift: `+numeros);
// numeros.sort((a,b) => a - b);
// console.log(`Sort: `+numeros);
// numeros.reverse((a,b) => a - b);
// console.log(`Reverse: `+numeros);
// numeros.pop();
// console.log(`Pop: `+numeros);
// numeros.shift(1);
// console.log(`Shift 1: `+numeros);
// numeros.slice(1);
// console.log(`Slice 2, 5: `+numeros);
// numeros.toLocaleString();
// console.log(`toLocaleString: `+numeros);

const maior = 18;
const idade = 5;
const i = document.getElementById(`pessoa`);
const j = document.getElementById(`pessoas`);

idade < maior ? i.innerText = `Vc é menor de ${maior} anos`: 0;
idade >= maior ? j.innerText = `Vcs são maiores de idade`: 0;
