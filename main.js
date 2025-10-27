let btnopen = document.getElementById('open');
let btnclose = document.getElementById('close');
let container = document.querySelector('.container');
let active = document.getElementById('active');
let fn = document.getElementById('fn');
let sport = document.getElementById('sport');
let other = document.getElementById('other');
let activec = document.getElementById('activec');
let fnc = document.getElementById('fnc');
let sportc = document.getElementById('sportc');
let otherc = document.getElementById('otherc');
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
    activec.classList.add('hide')
    fnc.classList.remove('hide')
    sportc.classList.add('hide')
    otherc.classList.add('hide')
}
sport.onclick = function(){
    activec.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.remove('hide')
    otherc.classList.add('hide')
}
active.onclick = function(){
    activec.classList.remove('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
    otherc.classList.add('hide')
}
other.onclick = function(){
    activec.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
    otherc.classList.remove('hide')
}
cancel.onclick = function(){
    activec.classList.add('hide')
    fnc.classList.add('hide')
    sportc.classList.add('hide')
    otherc.classList.add('hide')
}