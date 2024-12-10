
document.addEventListener('DOMContentLoaded', () => {
    const articuloLinks = document.querySelectorAll('.articulo-link');
    const articuloContenidos = document.querySelectorAll('.articulo-contenido');

    // Ocultar todos los contenidos al inicio
    articuloContenidos.forEach(contenido => {
        contenido.style.display = 'none';
    });

    articuloLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Ocultar todos los contenidos
            articuloContenidos.forEach(contenido => {
                contenido.style.display = 'none';
            });

            // Mostrar el contenido seleccionado
            const targetContenido = document.getElementById(targetId);
            if (targetContenido) {
                targetContenido.style.display = 'block';
            }
        });
    });
});