import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import Map_search_bar from './map_search';
import L from 'leaflet';
import LocateControl from 'react-leaflet-locate-control';
import Geocode from 'react-geocode'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

let latLng = [];
let test_info = [['Memorial Union', [42.0237, -93.6459]]];

class Mapbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            result:'',
            onSub: 0,
            lat: 42.0284,
            lng: -93.6509,
            zoom: 14,
            allLocation:[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        //this.state.onSub = 0;
    }
    handleSubmit(event) {
        event.preventDefault();
        //alert('Searching for: ' + this.state.value);
        this.setState({value: this.state.value});
        this.state.result = this.state.value;
        this.state.onSub = 1;
        //this.addAddr(this.state.value);
    }

    addAddr(inputAddress) {
        Geocode.fromAddress(inputAddress).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                latLng = [lat, lng]
                //console.log(latLng);
                console.log(inputAddress);
                let test1 = ['Add Event Here!', latLng];
                test_info.push(test1);
            },
            error => {
                console.error(error);
            }
        )
    }

    componentDidMount(){
        this.getUsersInfo();
      }
    getUsersInfo=_=>{
        fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
        .then(response=>response.json())
        .then(response=>this.setState({allLocation: response.data}))
        .catch(err=>console.log(err))
      }

    render() {
        //this.addAddr('Curtiss Hall');
        //this.addAddr('Physics Hall');
        //this.addAddr('Sukup Hall');
        if(this.state.onSub == 1){
            this.addAddr(this.state.result);
            this.state.onSub = this.state.onSub-1;
        }else{
            test_info = [['Memorial Union', [42.0237, -93.6459]]];
        }
        console.log(test_info)
        //['Parks Library', [42.0281, -93.6488]];
        //['Memorial Union', [42.0237, -93.6459]];
        //['Coover Hall', [42.0284, -93.6509]];

        return (
            <div className="map_wrapper">
                <br/>
                <form>
                    <TextField
                        id="searchbar"
                        label="Search an address"
                        name="searchbar"
                        value={this.state.value}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <br/>
                    <Button onClick={this.handleSubmit} variant="contained" >
                        Search
                    </Button>
                </form>
                <br/>
                <Map className="map"
                     center={this.state}
                     zoom={this.state.zoom}
                     style={{width: 1360, height: 600}}>
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