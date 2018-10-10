import L from "leaflet";
import {Component} from "react";

import React from "react";
import {Marker, Popup} from "react-leaflet";

const Example = ({components}) => (
    <div>
        {components.map((component, i) => <Marker key={i} position={component[1]}>
            <Popup>
                {component[0]}
            </Popup>
        </Marker>)}
    </div>
)

var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {
        maxZoom: 18,
        attribution: osmAttrib
    });

class pMarker extends Component {
    render(){


        var map = L.map('map').setView([42.0, -93.5], 10).addLayer(osm);

// attaching function on map click
        map.on('click', onMapClick);

// Script for adding marker on map click
        function onMapClick(e) {

            var geojsonFeature = {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [e.latlng.lat, e.latlng.lng]
                }
            }
        }
        var test2 = ['Your Location', [map.lat, map.lng]];
        return(
            <div className="mar">
            </div >

        )
    }
}

export default pMarker;