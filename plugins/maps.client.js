export default function(context, inject) {
  let mapLoaded = false;
  let mapAwaiting = null;

  addScript()

  inject('maps', {
    showMap
  })

  function addScript() {
    const script = document.createElement('script');
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  }

  function initMap() {
    mapLoaded = true;
    if(mapAwaiting) {
      const {canvas, lat, lng} = mapAwaiting
      renderMap(canvas, lat, lng)
      mapAwaiting = null
    }
  }

  function showMap(canvas, lat, lng) {
    if (mapLoaded) renderMap(canvas, lat, lng);
    else mapAwaiting = { canvas, lat, lng};
  }

  function renderMap(canvas, lat, lng) {
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(lat, lng),
      disableDefaultUI: true,
      zoomControl: true,
    };

    const position = new window.google.maps.LatLng(lat, lng);

    const map = new window.google.maps.Map(canvas, mapOptions);
    const marker = new window.google.maps.Marker({ position });
    marker.setMap(map);
  }
}
