document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault(); 

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });
        });
    });
}
document.addEventListener('DOMContentLoaded', function(){ //Para que el documento este listo
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    //QuerySelector: para seleccionar ese elemento. En este caso es una clase, por eso va con el punto adelante
    for(let i = 1; i<= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`; //Tener cuidado que las comillas son las invertidas no las simples
        imagen.dataset.imagenId = i; //Crear atributos personalizados


        //Añadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen; //Imagen que hago click
        
        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){ //Recordar que e = evento
    const id = parseInt(e.target.dataset.imagenId); //Me convierte el string que era antes a numero.
    
    // Generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
    }

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona, se cierra la imagen 
    cerrarImagen.onclick = function(){
        overlay.remove();
    }
    
    overlay.appendChild(cerrarImagen);

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}