document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido a Curiosidades de Yu-Gi-Oh!');
});
document.addEventListener('DOMContentLoaded', () => { /*Poder cambiar el color del fondo con un boton*/
    const button = document.createElement('button');
    button.textContent = 'Cambiar Fondo';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.border = 'none';
    button.style.backgroundColor = '#555';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '5px';
    document.body.appendChild(button);

    const colors = ['#070F2B', '#021526', '#1A3636', '#1A1A1D', 'black'];
    let index = 0;

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    });
});