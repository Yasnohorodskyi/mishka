const map = document.querySelector('.map');

map.addEventListener('mouseover', function() {

  const center = [59.93881322008863, 30.322945474580138];
  const zoom = 17;

  const myMap = L.map('mapid').setView(center, zoom);

  layer = googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
  });

  myMap.addLayer(layer);

  const iconOptions = {
    iconUrl: '../img/map-pin.svg',
    iconSize: [67, 100],
    iconAnchor:   [25, 85]
  }

  const customIcon = L.icon(iconOptions);

  const markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
    icon: customIcon
  }

  const marker = new L.Marker(center, markerOptions);
  marker.addTo(myMap);
})

