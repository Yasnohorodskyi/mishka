document.querySelector(".map").addEventListener("mouseover",(function(){const e=[59.93881322008863,30.322945474580138],o=L.map("mapid").setView(e,17);layer=googleStreets=L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",{maxZoom:20,subdomains:["mt0","mt1","mt2","mt3"]}),o.addLayer(layer);const t={title:"MyLocation",clickable:!0,draggable:!0,icon:L.icon({iconUrl:"../img/map-pin.svg",iconSize:[67,100],iconAnchor:[25,85]})};new L.Marker(e,t).addTo(o)}));