let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let container = document.querySelector('.container');
let seyasa = document.getElementById('seyasa');
let aktsad = document.getElementById('aktsad');
let information = document.getElementById('information');
let fn = document.getElementById('fn');
let sport = document.getElementById('sport');
let seyasac = document.getElementById('seyasac');
let aktsadc = document.getElementById('aktsadc');
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
seyasa.onclick = function(){
    seyasac.classList.remove('hide')
    aktsadc.classList.add('hide')
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}
aktsad.onclick = function(){
    seyasac.classList.add('hide')
    aktsadc.classList.remove('hide')
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}
fn.onclick = function(){
    seyasac.classList.add('hide')
    aktsadc.classList.add('hide')
    informationc.classList.add('hide')
    fnc.classList.remove('hide')
    sportc.classList.add('hide')
}
sport.onclick = function(){
    seyasac.classList.add('hide')
    aktsadc.classList.add('hide')
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.remove('hide')
}
information.onclick = function(){
    seyasac.classList.add('hide')
    aktsadc.classList.add('hide')
    informationc.classList.remove('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}
cancel.onclick = function(){
    seyasac.classList.add('hide')
    aktsadc.classList.add('hide')
    informationc.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
}