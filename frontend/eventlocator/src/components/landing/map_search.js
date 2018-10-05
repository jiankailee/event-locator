 import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
 import { MapControl } from 'react-leaflet';

 class Map_search_bar extends MapControl {

   createLeafletElement() {
     return GeoSearchControl({
       provider: new OpenStreetMapProvider(),
       style: 'bar',
       showMarker: true,
       showPopup: false,
       autoClose: true,
       retainZoomLevel: false,
       animateZoom: true,
       keepResult: false,
       searchLabel: 'search'
     });
   }
 }

 export default Map_search_bar;