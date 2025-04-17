var mapa = L.map('mapa').setView([-12.9714, -38.5014], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(mapa);

// Marcadores de ONGs
const locais = [
  { nome: "ONG em Salvador (BA)", coord: [-12.9714, -38.5014] },
  { nome: "ONG em Porto Alegre (Sul)", coord: [-30.0346, -51.2177] },
  { nome: "ONG em Manaus (Norte)", coord: [-3.1190, -60.0217] },
];

locais.forEach(local => {
  L.marker(local.coord).addTo(mapa).bindPopup(local.nome);
});
