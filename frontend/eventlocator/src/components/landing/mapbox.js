import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import Map_search_bar from './map_search';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Mapbox extends Component {
    state = {
        lat: 42.0284,
        lng: -93.6509,
        zoom: 14,
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="App">
                <Map className="map" center={position} zoom={this.state.zoom}>
                    {/* <Map_search_bar/> */}
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            <b>Coover Hall</b> <br /> TG_7 is working
                        </Popup>
                    </Marker>
                </Map>
            </div >
        );
    }
}

export default Mapbox;