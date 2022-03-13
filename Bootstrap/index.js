// Initialize and add the map
function initMap() {
  // The location of 50 Main St Boston MA
  const fiftyMainSt = { lat: 42.373, lng: -71.062 };
  // The map, centered at 50 Main St Boston MA
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: fiftyMainSt,
  });
  // The marker, positioned at 50 Main St BoSton MA
  const marker = new google.maps.Marker({
    position: fiftyMainSt,
    map: map,
  });
}
