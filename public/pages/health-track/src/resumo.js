const alturaElement = document.getElementById('valorAltura');
const passosElement = document.getElementById('valorPassos');
const pesoElement = document.getElementById('valorPeso')
const imcElement = document.getElementById('valorIMC')
const tagElement = document.getElementById('tagIMC')

var pesoValue = JSON.parse(localStorage.getItem('lista_peso')) || []
var alturaValue = JSON.parse(localStorage.getItem('lista_altura')) || []

let userStats = {
    passos: '6000',
    altura: alturaValue,
    peso: pesoValue
}

function render(){

    console.log(userStats.passos)

    alturaElement.innerHTML = '';
    passosElement.innerHTML = '';

    textPassos = document.createTextNode(userStats.passos);
    passosElement.appendChild(textPassos);

    textAltura = document.createTextNode(`${userStats.altura} m`);
    alturaElement.appendChild(textAltura);

    textPeso = document.createTextNode(`${userStats.peso} Kg`);
    pesoElement.appendChild(textPeso);

    calcularIMC()
}
document.getElementById('card-button').onclick = () =>{
    window.location.href = 'userEsportes.html'
}

calcularIMC = () =>{
    const {passos, altura, peso} = userStats
    let result = '';

    imcElement.innerHTML = ''
    let valorIMC = Math.round(peso/(altura*altura));

    if (valorIMC < 18.5){
        result = 'Muito Magro'
    }
    else if(valorIMC >= 18.5 && valorIMC <= 24.9){
        result = 'Peso normal'
    }
    else if (valorIMC >=25 && valorIMC <= 29.9){
        result = 'Sobrepeso'
    }
    else if (valorIMC >=30 && valorIMC <= 39.9){
        result = 'Obesidade'
    }
    else if (valorIMC >= 40){
        result = 'Obesidade Grave'
    }

    imcElement.innerHTML = `IMC ${valorIMC}`
    tagElement.innerHTML = result
}

goToPeso = () =>{
    window.location.href = 'userPeso.html'
}
goToAltura = () =>{
    window.location.href = 'userAltura.html'
}
goToGithub = () =>{
    window.location.href = 'https://github.com/andrelara2002'
}
goToIndex = () => {
    window.location.href = 'https://andrelara2002.github.io'
}
render();
