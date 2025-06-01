const btnAntecedentes = document.getElementById('btnAntecedentes');
const contenedor = document.getElementById('departamentos');

btnAntecedentes.addEventListener('click', () => {
  // Alternar la visibilidad del contenedor
  contenedor.classList.toggle('hidden');

  // Si el contenedor está visible y está vacío, crear los botones
  if (!contenedor.classList.contains('hidden') && contenedor.innerHTML === "") {
    // Crear el botón de Cerro Largo
    const botonCerroLargo = document.createElement('button');
    botonCerroLargo.textContent = "Cerro Largo";
    botonCerroLargo.className = "departamento";
    botonCerroLargo.addEventListener('click', () => {
      alert("Elegiste Cerro Largo");
    });

    // Crear el botón de Montevideo
    const botonMontevideo = document.createElement('button');
    botonMontevideo.textContent = "Montevideo";
    botonMontevideo.className = "departamento";
    botonMontevideo.addEventListener('click', () => {
      alert("Elegiste Montevideo");
    });

    // Añadir los botones al contenedor
    contenedor.appendChild(botonCerroLargo);
    contenedor.appendChild(botonMontevideo);
  }
});
function mostrarCapa(id) {
  const antecedentes = document.getElementById('antecedentes-info');
  const timeline = document.getElementById('timeline-info');

  if (id === 'antecedentes') {
    antecedentes.classList.remove('hidden');
    timeline.classList.add('hidden');
  } else if (id === 'timeline') {
    timeline.classList.remove('hidden');
    antecedentes.classList.add('hidden');
  }
}
