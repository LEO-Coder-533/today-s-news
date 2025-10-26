let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let container = document.querySelector('.container');
let information = document.getElementById('information');
let fn = document.getElementById('fn');
let sport = document.getElementById('sport');
let informationc = document.getElementById('informationc');
let fnc = document.getElementById('fnc');
let sportc = document.getElementById('sportc');
let cancel = document.getElementById('cancel');

btnclose.onclick = function(){
    container.classList.add('hide');
    btnclose.classList.add('hide');
    btnopen.classList.remove('hide');
}
btnopen.onclick = function(){
    container.classList.remove('hide');
    btnclose.classList.remove('hide');
    btnopen.classList.add('hide');
}
fn.onclick = function(){
    informationc.classList.add('hide')
    fnc.classList.remove('hide')
    sportc.classList.add('hide')
}
sport.onclick = function(){
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.remove('hide')
}
information.onclick = function(){
    informationc.classList.remove('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}
cancel.onclick = function(){
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}