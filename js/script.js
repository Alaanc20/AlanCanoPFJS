window.onload = function () {
    const ciudadesContainer = document.getElementById("ciudades-container");
    const ciudadFavoritaSelect = document.getElementById("ciudadFavoritaSelect");
    const detallesCiudad = document.getElementById("detallesCiudad");
    const ciudades = datosClimaConImagen;

    ciudades.forEach(function (ciudad) {
        const ciudadElement = document.createElement("div");
        ciudadElement.classList.add("ciudad");
        ciudadElement.innerHTML = `
        <img src="${ciudad.img}" alt="${ciudad.ciudad}">
        <p>${ciudad.ciudad}: ${ciudad.temperatura}°C</p>
`;
        ciudadElement.addEventListener("click", function () {
            toggleDetalles(ciudadElement);
        });
        ciudadesContainer.appendChild(ciudadElement);
    });
    ciudadFavoritaSelect.addEventListener("change", function () {
        const ciudadSeleccionada = ciudadFavoritaSelect.value;
        const ciudad = obtenerCiudad(ciudadSeleccionada);
        if (ciudad) {
            const detallesHTML = generarDetallesHTML(ciudad);
            detallesCiudad.innerHTML = detallesHTML;
        } else {
            detallesCiudad.innerHTML = "";
        }
    });
};

function toggleDetalles(ciudadElement) {
    // comprueba si esta visible los detalles
    const detallesElement = ciudadElement.querySelector(".detalles");
    const estaExpandido = detallesElement && detallesElement.classList.contains("visible");

    if (estaExpandido) {
        // si esta expandido oculta detalles y reset
        detallesElement.remove();
        ciudadElement.addEventListener("click", function () {
            toggleDetalles(ciudadElement);
        });
    } else {
        // verifica si esta expandido sino lo hace
        const ciudad = obtenerCiudad(ciudadElement.textContent);
        const detallesHTML = generarDetallesHTML(ciudad);

        const nuevosDetallesElement = document.createElement("div");
        nuevosDetallesElement.classList.add("detalles", "visible");
        nuevosDetallesElement.innerHTML = detallesHTML;

        ciudadElement.appendChild(nuevosDetallesElement);
        ciudadElement.removeEventListener("click", function () {
            toggleDetalles(ciudadElement);
        });
    }
}

function obtenerCiudad(ciudadTexto) {
    // busca ciudad
    return datosClima.find(function (ciudad) {
        return ciudad.ciudad === ciudadTexto.split(":")[0].trim();
    });
}

function generarDetallesHTML(ciudad) {
    return `
      <p><strong>Probabilidad de lluvia:</strong> ${ciudad.probabilidadLluvia}%</p>
      <p><strong>Amanecer:</strong> ${ciudad.amanecer}</p>
      <p><strong>Anochecer:</strong> ${ciudad.anochecer}</p>
      <p><strong>Descripción:</strong> ${ciudad.descripcion}</p>
    `;
}