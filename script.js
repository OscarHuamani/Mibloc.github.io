document.addEventListener('DOMContentLoaded', function () {
    // Puedes agregar más proyectos aquí
    const proyectos = [
        { titulo: 'Desarrollo de Página Web de Registro de Asistencias', descripcion: 'Descripción del proyecto...' },
        { titulo: 'Desarrollo de Página Web sobre Abogados con WordPress y Divi', descripcion: 'Descripción del proyecto...' },
        { titulo: 'Desarrollo de Aplicación Móvil con Flutter', descripcion: 'Descripción del proyecto...' }
    ];

    const proyectosContainer = document.getElementById('proyectos-container');

    proyectos.forEach(proyecto => {
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('project');

        const titulo = document.createElement('h2');
        titulo.textContent = proyecto.titulo;

        const descripcion = document.createElement('p');
        descripcion.textContent = proyecto.descripcion;

        proyectoDiv.appendChild(titulo);
        proyectoDiv.appendChild(descripcion);

        proyectosContainer.appendChild(proyectoDiv);
    });
});
