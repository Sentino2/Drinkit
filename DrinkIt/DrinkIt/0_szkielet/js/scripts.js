// Inicializar el mapa centrado en Berlín
const map = L.map('map').setView([52.5200, 13.4050], 12);

// Agregar capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// // Datos de ejemplo de fuentes de agua en Berlín en formato GeoJSON
// const fuentesData = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [13.404954, 52.520008]
//             },
//             "properties": {
//                 "name": "Fuente de Ejemplo 1"
//             }
//         },
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [13.409420, 52.519383]
//             },
//             "properties": {
//                 "name": "Fuente de Ejemplo 2"
//             }
//         }
//         // Puedes añadir más puntos aquí
//     ]
// };

const fuentesData = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.404954, 52.520008] }, "properties": { "name": "Fuente de Ejemplo 1" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.409420, 52.519383] }, "properties": { "name": "Fuente de Ejemplo 2" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.376987, 52.516275] }, "properties": { "name": "Fuente en Tiergarten" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.388860, 52.517037] }, "properties": { "name": "Fuente en Reichstag" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.377704, 52.507269] }, "properties": { "name": "Fuente en Potsdamer Platz" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.394228, 52.530761] }, "properties": { "name": "Fuente de Humboldthain" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.438612, 52.512671] }, "properties": { "name": "Fuente en Treptower Park" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.333086, 52.515894] }, "properties": { "name": "Fuente en Charlottenburg" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.429778, 52.489731] }, "properties": { "name": "Fuente en Neukölln" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.459564, 52.516541] }, "properties": { "name": "Fuente de Rummelsburg" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.407829, 52.535074] }, "properties": { "name": "Fuente en Mauerpark" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.378968, 52.487338] }, "properties": { "name": "Fuente en Schöneberg" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.287165, 52.502376] }, "properties": { "name": "Fuente en Grunewald" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.419481, 52.496739] }, "properties": { "name": "Fuente en Kreuzberg" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.387268, 52.539697] }, "properties": { "name": "Fuente en Gesundbrunnen" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.446339, 52.517573] }, "properties": { "name": "Fuente en Friedrichshain" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.409693, 52.489384] }, "properties": { "name": "Fuente en Tempelhofer Feld" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.364746, 52.500309] }, "properties": { "name": "Fuente en Zoologischer Garten" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.286870, 52.471130] }, "properties": { "name": "Fuente en Wannsee" }},
        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [13.351859, 52.525930] }, "properties": { "name": "Fuente en Moabit" }}
    ]
};

// Agregar las fuentes al mapa
L.geoJSON(fuentesData, {
    onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
        }
    }
}).addTo(map);

// Agregar las fuentes al mapa
L.geoJSON(fuentesData, {
    onEachFeature: (feature, layer) => {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(`<strong>${feature.properties.name}</strong>`);
        }
    }
}).addTo(map);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});