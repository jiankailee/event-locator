import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { withStyles } from '@material-ui/core/styles';
import '../../App.css';
import map_search_bar from './map_search';

const styles = theme => ({
    root: {
        display: 'flex',
    },
});

class Mapbox extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }
    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="App">
                <Map className="map" center={position} zoom={this.state.zoom}>
                    <map_search_bar position="topleft"/>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div >
        );
    }
}

export default withStyles(styles)(Mapbox);