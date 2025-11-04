//calcula el aumento según sueldo y antiguedad
document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('sueldoForm');
    if(!form) return;
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const sueldo = parseFloat(document.getElementById('sueldo').value) ||0;
        const antig = parseInt(document.getElementById('antig').value) ||0;
        let nuevo = sueldo;
        if(sueldo < 5000 && antig >=10) nuevo = sueldo * 1.20;
        else if (sueldo <5000 && antig < 10) nuevo = sueldo * 1.05;
        document.getElementById('sueldoResult').textContent = 'Sueldo a pagar: $${nuevo,toFixed(2)}';
    });
});