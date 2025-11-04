//muestra el precio según selección

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('pizzaType');
    const out = document.getElementById('pizzaPrice');
    const prices = {
        'jamon': 1200,
        'muzzarella': 1000,
        'morrones': 1300,
    };
    function update() {
        const v = select.value;
        out.textContent = v ? 'Precio: $${prices[v]}': '';
    }
    select.addEventListener('change',update);
    update();
});