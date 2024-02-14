// Tomando los datos de las peliculas
document.addEventListener('DOMContentLoaded', () => {
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      if (radioButton.checked) {
        const pelicula = radioButton.value;
        localStorage.setItem(pelicula, pelicula);
        mostrarLocalStorage();
      }
    });
  });
});
// Función para mostrar las películas seleccionadas desde el localStorage
function mostrarLocalStorage() {
  const listaSeleccionadas = document.querySelector('.seleccionadas');

  // Limpiando la lista antes de mostrar las películas
  listaSeleccionadas.innerHTML = '';

  // Itera sobre las claves (nombres de las películas) en el localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const pelicula = localStorage.key(i);

    // Creando un nuevo li  y checkbox para cada película
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = pelicula;
    const nuevoCheckbox = document.createElement('input');
    nuevoCheckbox.type = 'checkbox';
    nuevoCheckbox.name = 'peliculaCheckbox';
    nuevoCheckbox.value = pelicula;
    nuevoCheckbox.addEventListener('change', function () {
      if (nuevoCheckbox.checked) {
        // Eliminando la película del localStorage
        localStorage.removeItem(pelicula);
        // se actualiza la lista
        location.reload();
        mostrarPeliculasSeleccionadas();
      }
    });
    nuevoElemento.append(nuevoCheckbox);

    // Agregando el nuevo elemento a la lista de películas seleccionadas
    listaSeleccionadas.append(nuevoElemento);
  }
}
mostrarLocalStorage();

// El año que aparece en el footer
let year = new Date().getFullYear();

document.querySelector('#year').innerHTML = year;
