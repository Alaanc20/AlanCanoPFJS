const ciudadFavoritaSelect = document.getElementById("ciudadFavoritaSelect");
const guardarCiudadFavoritaBtn = document.getElementById("guardarCiudadFavoritaBtn");

function guardarDatosLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDatosLocalStorage(clave) {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}

function calcularCiudadesProbabilidadLluvia() {
    const ciudades = datosClimaConImagen;
    const ciudadesOrdenadas = ciudades.sort(function (a, b) {
        return a.probabilidadLluvia - b.probabilidadLluvia;
    });
    const ciudadesMasLluvia = ciudadesOrdenadas.slice(-3); 
    const ciudadesMenosLluvia = ciudadesOrdenadas.slice(0, 3); 

    return {
        masLluvia: ciudadesMasLluvia,
        menosLluvia: ciudadesMenosLluvia,
    };
}

const ciudadesProbabilidadLluvia = calcularCiudadesProbabilidadLluvia();
guardarDatosLocalStorage("ciudadesMasLluvia", ciudadesProbabilidadLluvia.masLluvia);
guardarDatosLocalStorage("ciudadesMenosLluvia", ciudadesProbabilidadLluvia.menosLluvia);

const ciudadesMasLluviaGuardadas = obtenerDatosLocalStorage("ciudadesMasLluvia");
const ciudadesMenosLluviaGuardadas = obtenerDatosLocalStorage("ciudadesMenosLluvia");

//   ciudades con mayor lluvia
const ciudadesMasLluviaContainer = document.getElementById("ciudadesMasLluvia");
if (ciudadesMasLluviaGuardadas) {
    ciudadesMasLluviaGuardadas.forEach(function (ciudad) {
        const ciudadElement = document.createElement("p");
        ciudadElement.textContent = `${ciudad.ciudad}: ${ciudad.probabilidadLluvia}%`;
        ciudadesMasLluviaContainer.appendChild(ciudadElement);
    });
}

//   ciudades con menor lluvia
const ciudadesMenosLluviaContainer = document.getElementById("ciudadesMenosLluvia");
if (ciudadesMenosLluviaGuardadas) {
    ciudadesMenosLluviaGuardadas.forEach(function (ciudad) {
        const ciudadElement = document.createElement("p");
        ciudadElement.textContent = `${ciudad.ciudad}: ${ciudad.probabilidadLluvia}%`;
        ciudadesMenosLluviaContainer.appendChild(ciudadElement);
    });
}

guardarCiudadFavoritaBtn.addEventListener("click", function () {
    const ciudadFavorita = ciudadFavoritaSelect.value;
    if (ciudadFavorita) {
        guardarCiudadFavorita(ciudadFavorita);
        alert("Ciudad favorita guardada: " + ciudadFavorita);
    } else {
        alert("Selecciona una ciudad favorita");
    }
});

window.addEventListener("load", function () {
    const ciudadFavorita = obtenerCiudadFavorita();
    if (ciudadFavorita) {
        ciudadFavoritaSelect.value = ciudadFavorita;
    }
});