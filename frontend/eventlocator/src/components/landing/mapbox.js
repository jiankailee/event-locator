import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import Map_search_bar from './map_search';
import L from 'leaflet';
import LocateControl from 'react-leaflet-locate-control';
import Geocode from 'react-geocode'

delete L.Icon.Default.prototype._getIconUrl;
Geocode.setApiKey("AIzaSyBgd1QZKo1cbcKgiHoWbr6pcBTsrssKzT4");
const Example = ({components}) => (
    <div>
        {components.map((component, i) => <Marker key={i} position={component[1]}>
            <Popup>
                {component[0]}
            </Popup>
        </Marker>)}
    </div>
)
const locateOptions = {
    position: 'topright',
    strings: {
        title: 'Show me where I am, yo!'
    },
    onActivate: () => {} // callback before engine starts retrieving locations
  }
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
let latLng = [];
let test_info = [['Parks Library', [42.0281, -93.6488]], ['Memorial Union', [42.0237, -93.6459]]];
Geocode.fromAddress("Physics Hall").then(
    response => {
        const { lat, lng } = response.results[0].geometry.location;
        latLng = [lat, lng]
        //console.log(latLng);
        let test1 = ['Add Event Here!', latLng];
        test_info.push(test1);
    },
    error => {
        console.error(error);
    }
)

class Mapbox extends Component {
    state = {
        lat: 42.0284,
        lng: -93.6509,
        zoom: 14,
        allLocation:[],
    }
    componentDidMount(){
        this.getUsersInfo();
      }
    getUsersInfo=_=>{
        fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
        .then(response=>response.json())
        .then(response=>this.setState({allLocation: response.data}))
        // .then({data})=>{
        //   console.log(data)
        // })
        .catch(err=>console.log(err))
        //console.log(this.state.alluser);
      }




    render() {


        console.log(this.state.allLocation)
        console.log(test_info)
        // var test_info = [['Parks Library', [42.0281, -93.6488]], ['Memorial Union', [42.0237, -93.6459]]];
        // var test1 = ['Coover Hall', [42.0284, -93.6509]];
        // test_info.push(test1);

        return (
            <div className="map_wrapper">
                <Map className="map" center={this.state} zoom={this.state.zoom}>
                    {/* <Map_search_bar/> */}
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Example components={test_info}/>
                </Map>
            </div >
        );
    }
}

export default Mapbox;