//sumar y restar dos numeros y muestra el resultado
document.addEventListener('DOMContentLoaded', () => {
    const a = document.getElementById ('n1');
    const b = document.getElementById ('n2')
    const res = document.getElementById ('res');
    document.getElementById('sumBtn').addEventListener('click', () => {
        const val = (parseFloat(a.value) || 0) + (parseFloat(b.value) || 0);
    });

    document.getElementById('subBtn').addEventListener('click', () =>{
        const val = (parseFloat(a.value) || 0) - (parseFloat(b.value) || 0);
    });
});