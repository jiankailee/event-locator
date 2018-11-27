import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup, MapControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import L from 'leaflet';
import EventBox from './eventInfoBox'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Mapbox extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        lat: 42.0284,
        lng: -93.6509,
        zoom: 14,
        allLocation: [],
    }
    Example = ({ components }) => (
        <div>
            {components.map((component, i) => <Marker key={i} position={[component.latitude, component.longitude]}>
                <Popup onOpen={() => this.passInfoToBox(component)}>
                    {component.eventName}
                </Popup>
            </Marker>)}
        </div>
    )
    componentDidMount() {
        this.getUsersInfo();
    }
    passInfoToBox = (values) =>{
        this.props.callbackFromParent(values);
        console.log(this.state.allLocation)
    }
    getUsersInfo = _ => {
        fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
            .then(response => response.json())
            .then(response => this.setState({ allLocation: response.data }))
            // .then({data})=>{
            //   console.log(data)
            // })
            .catch(err => console.log(err))
        //console.log(this.state.alluser);
    }
    render() {
        return (
            <div className="map_wrapper">
                <Map className="map" center={this.state} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <this.Example components={this.state.allLocation} />
                </Map>
            </div >
        );

    }
}

export default Mapbox;