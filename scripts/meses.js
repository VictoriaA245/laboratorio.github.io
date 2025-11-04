//va a monstrar los meses en una lista dentro del document
const meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

const ul = document.createElement('ul');
meses.forEach(m => {
    const li = document.createElement('li');
    li.textContent = m;
    ul.appendChild(li);
});
document.addEventListener('DOMContentLoaded', ()=> {
    const cont = document.getElementById('mesesContainer');
    if(cont) cont.appendChild(ul);
});

