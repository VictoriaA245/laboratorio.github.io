//pregunta si la persona es mayor de 18 y reidirige segun la respuesta dada
document.addEventListener('DOMContentLoaded', () => {
    const ok = confirm('¿Sos mayor de 18 años?');
    if(ok){
        //redirigir a una pag interna
        window.location.href = 'mayor.html'; //crea una pag con mensaje
    } else {
        window.location.href = 'menor.html'; //crea una pag con mensaje
    }
});