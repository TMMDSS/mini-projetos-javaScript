const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'imagens/ligada.jpg';
    }
    
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'imagens/desligada.jpg';
    }
    
}

function lampBroken() {
    lamp.src = 'imagens/quebrada.jpg'
}

function lampOnOff () {
    if (turnOnOff.textContent === 'Ligar') { //esse é o teste logico ou seja SE O CONTEUDO DO BOTAO É identico a LIGAR VC VAI EXECUTAR A FUNCTION lampOn() ali de cima
        lampOn()
        turnOnOff.textContent = 'Desligar' // e aqui o botao vai receber o conteudo 'Desligar'
    } else {  // se não agora quando a lampada estiver ligada vai receber a função lampOff()
        lampOff()
        turnOnOff.textContent = 'Ligar' // e quando estiver desligada vai receber o conteudo 'Ligar'
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken);