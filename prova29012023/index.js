const idade = 23;
const profissao = `Programador`;
// primeiro coloca uma const com para receber o id.
const i = document.getElementById("pessoa"); 
const j = document.getElementById(`pessoas`);
// depois usa como um objeto que recebe uma String ou Integer seja qual for.
if (idade == 21 && profissao == `Programador`) {
  i.innerText = `Sou programador e tenho de 21 anos`;
} else if (idade > 21 && profissao == `Programador`) {
  i.innerText = `Sou maior de 21 anos e sou programador`;
} else if (idade == 21 && profissao == `Programador`) {
  i.innerText = `Não sou maior de 21 e sou programador`;
} else if (idade == 21 && profissao == `Programador`) {
  i.innerText = `Sou maior de 21 anos e não  sou programador`;
} else {
  i.innerText = `Sou menor de 21 anos e não  sou programador`;
}

j.innerText = `s`;