const datosClima = [
    {
        ciudad: "Tokio",
        temperatura: 25,
        probabilidadLluvia: 60,
        amanecer: "05:30 AM",
        anochecer: "06:45 PM",
        descripcion: "Lluvia ligera en la tarde",
    },
    {
        ciudad: "Delhi",
        temperatura: 35,
        probabilidadLluvia: 20,
        amanecer: "06:00 AM",
        anochecer: "07:15 PM",
        descripcion: "Soleado y caluroso"
    },
    {
        ciudad: "Shanghai",
        temperatura: 28,
        probabilidadLluvia: 40,
        amanecer: "05:45 AM",
        anochecer: "06:30 PM",
        descripcion: "Nublado con posibilidad de lluvia"
    },
    {
        ciudad: "Mumbai",
        temperatura: 30,
        probabilidadLluvia: 10,
        amanecer: "06:15 AM",
        anochecer: "06:45 PM",
        descripcion: "Cielo despejado y caluroso"
    },
    {
        ciudad: "Estambul",
        temperatura: 18,
        probabilidadLluvia: 30,
        amanecer: "06:45 AM",
        anochecer: "07:30 PM",
        descripcion: "Parcialmente nublado"
    },
    {
        ciudad: "Nueva York",
        temperatura: 15,
        probabilidadLluvia: 50,
        amanecer: "06:00 AM",
        anochecer: "07:30 PM",
        descripcion: "Chaparrones intermitentes"
    },
    {
        ciudad: "El Cairo",
        temperatura: 32,
        probabilidadLluvia: 5,
        amanecer: "05:45 AM",
        anochecer: "06:15 PM",
        descripcion: "Calor intenso y soleado"
    },
    {
        ciudad: "Lima",
        temperatura: 20,
        probabilidadLluvia: 10,
        amanecer: "06:30 AM",
        anochecer: "06:00 PM",
        descripcion: "Niebla matutina, cielo despejado"
    },
    {
        ciudad: "Londres",
        temperatura: 12,
        probabilidadLluvia: 70,
        amanecer: "05:30 AM",
        anochecer: "08:00 PM",
        descripcion: "Lluvia constante durante el día"
    },
    {
        ciudad: "París",
        temperatura: 15,
        probabilidadLluvia: 50,
        amanecer: "06:30 AM",
        anochecer: "08:30 PM",
        descripcion: "Chubascos intermitentes"
    },
    {
        ciudad: "Roma",
        temperatura: 17,
        probabilidadLluvia: 20,
        amanecer: "06:15 AM",
        anochecer: "08:15 PM",
        descripcion: "Clima fresco y soleado"
    },
    {
        ciudad: "Buenos Aires",
        temperatura: 25,
        probabilidadLluvia: 5,
        amanecer: "06:45 AM",
        anochecer: "07:15 PM",
        descripcion: "Calor intenso y cielo despejado"
    },
    {
        ciudad: "Sídney",
        temperatura: 22,
        probabilidadLluvia: 30,
        amanecer: "06:20 AM",
        anochecer: "05:50 PM",
        descripcion: "Lluvias dispersas y vientos suaves"
    },
    {
        ciudad: "Ciudad de México",
        temperatura: 21,
        probabilidadLluvia: 25,
        amanecer: "06:35 AM",
        anochecer: "08:05 PM",
        descripcion: "Nubes dispersas y clima agradable"
    },
];
const datosClimaConImagen = datosClima.map(ciudad => {
    return {
        ...ciudad,
        img: `assets/ciudades/${ciudad.ciudad.toLowerCase().replace(/\s/g, "_")}.jpg`
    };
});
