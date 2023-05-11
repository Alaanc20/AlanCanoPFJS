window.onload = function () {
    const ciudadesContainer = document.getElementById("ciudades-container");

    const ciudades = datosClimaConImagen; // Utiliza el array datosClimaConImagen en lugar de datosClima

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
};

function toggleDetalles(ciudadElement) {
    // Verificar si los detalles están visibles
    const detallesElement = ciudadElement.nextElementSibling;
    const estaExpandido = detallesElement && detallesElement.classList.contains("detalles");

    if (estaExpandido) {
        // Si está expandido, ocultar los detalles y restablecer el evento de clic
        detallesElement.remove();
        ciudadElement.addEventListener("click", function () {
            toggleDetalles(ciudadElement);
        });
    } else {
        // Si no está expandido, crear y mostrar los detalles y remover el evento de clic
        const ciudad = obtenerCiudad(ciudadElement.textContent);
        const detallesHTML = generarDetallesHTML(ciudad);

        const nuevosDetallesElement = document.createElement("div");
        nuevosDetallesElement.classList.add("detalles");
        nuevosDetallesElement.innerHTML = detallesHTML;

        ciudadElement.insertAdjacentElement("afterend", nuevosDetallesElement);
        ciudadElement.removeEventListener("click", function () {
            toggleDetalles(ciudadElement);
        });
    }
}

function obtenerCiudad(ciudadTexto) {
    // Buscar la ciudad en el array de datosClima
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