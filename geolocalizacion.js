////////////////para geolocalizar
////////////////funcion de maercador de distancia de un punto
function geolocalizacion(){
    map.locate({setView: true, maxZoom: 16});
    function onLocationFound(e) {
      var radius = e.accuracy;
      L.marker(e.latlng).addTo(map)
          .bindPopup("Usted está " + radius + " metros desde este punto").openPopup();
      L.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);
    }
    document.getElementById('geolocalizar').addEventListener('click',function(){
      geolocalizacion();
    })