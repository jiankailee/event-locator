import React, { createRef, Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import Map_search_bar from './map_search';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

const Example = ({components}) => (
    <div>
        {components.map((component, i) => <Marker key={i} position={component[1]}>
        <Popup>
            {component[0]}
        </Popup>
        </Marker>)}
    </div>
)

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var test_info = [['Parks Library', [42.0281, -93.6488]], ['Memorial Union', [42.0237, -93.6459]]];

class Mapbox extends Component {
    state = {
        lat: 42.0284,
        lng: -93.6509,
        zoom: 14,
    }


    render() {





        const position = [this.state.lat, this.state.lng]
        var test1 = ['Coover Hall', [42.0284, -93.6509]];

        test_info.push(test1)

        return (
            <div className="App">
                <Map className="map" center={position} zoom={this.state.zoom}>
                    {/* <Map_search_bar/> */}
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Example components={test_info}/>
                </Map>
            </div >
        );
    }
}

export default Mapbox;