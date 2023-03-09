// const body = document.body;
// const h1 = document.createElement(`h1`);
// const text = document.createTextNode(`Meu nome é Henrique`);

// h1.appendChild(text);
// body.appendChild(h1);

// const textH2 = document.createTextNode(`0`);
// const h2 = document.createElement(`h2`);
// const button = document.createElement(`button`);
// const textB1 = document.createTextNode(`+1`);
// const buttonDois = document.createElement(`button`);
// const textB2 = document.createTextNode(`- 1`);

// h2.appendChild(textH2);
// button.appendChild(textB1);
// body.appendChild(button);
// buttonDois.appendChild(textB2);
// body.appendChild(buttonDois);
// body.appendChild(h2);
const btnDois = document.getElementById('btnDois');
const btnUm = document.getElementById('btnUm');
const visor = document.getElementById(`visor`);

visor.innerText = 0;

btnUm.addEventListener(`click`, () => {
    let i = Number(visor.innerText);
    i += 1;
    visor.innerText = i;
})
btnDois.addEventListener(`click`, () => {
    visor.innerText -= 1;
});


