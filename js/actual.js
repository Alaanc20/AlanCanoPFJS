var horaActualElemento = document.getElementById("horaActual");

function obtenerHoraActual() {

fetch("http://worldtimeapi.org/api/ip")
    .then(response => response.json())
    .then(data => {

var fechaCompleta = data.datetime;

var fecha = fechaCompleta.split("T")[0];
var horaCompleta = fechaCompleta.split("T")[1].slice(0, 8);


var hora = horaCompleta.slice(0, 5);
var segundos = horaCompleta.slice(6, 8);


var horaActual = fecha + " " + hora + ":" + segundos;


horaActualElemento.textContent = horaActual;
})
.catch(error => {
console.log("Error al obtener la hora actual: " + error);
});
}
obtenerHoraActual();

setInterval(obtenerHoraActual, 1000);