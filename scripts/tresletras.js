document.addEventListener('DOMContentLoaded', () =>{
    const input = document.getElementById('shortTxt');
    const box =document.getElementById('validBox');
    const okList = ['y','yes','si','ok','oui','ja','sim','si'];

    input.addEventListener('blur',() => {
        const v = input.ariaValueMax.trim().toLowerCase();
        if(v.length <=3 && okList.includes(v)){
            box.style.background = 'lightgreen';
            box.textContent = 'valor aceptado';
        } else {
            box.style.background = 'transparent';
            box.textContent = ''
        }
    });
});