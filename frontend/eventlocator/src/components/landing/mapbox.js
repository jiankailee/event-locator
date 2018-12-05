import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup, MapControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import L from 'leaflet';
import LocateControl from 'react-leaflet-locate-control';
import Geocode from 'react-geocode'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
delete L.Icon.Default.prototype._getIconUrl;
Geocode.setApiKey("AIzaSyBgd1QZKo1cbcKgiHoWbr6pcBTsrssKzT4");

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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        value: '',
        result: '',
        onSub: 0,
        lat: 42.0284,
        lng: -93.6509,
        zoom: 14,
        allLocation: [],
        privateLocation: []
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
        this.getPrivateEvent();
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        //this.state.onSub = 0;
    }
    handleSubmit(event) {
        event.preventDefault();
        //alert('Searching for: ' + this.state.value);
        this.setState({ value: this.state.value });
        this.state.result = this.state.value;
        this.state.onSub = 1;
        //this.addAddr(this.state.value);
    }
    addAddr(inputAddress) {
        Geocode.fromAddress(inputAddress).then(
            response => {
                if (response.results[0].geometry.location.lat != null && response.results[0].geometry.location.lng != null)
                    this.setState({ lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng });
            },
            error => {
                console.error(error);
            }
        )
    }
    componentWillReceiveProps(nextProps) { 
        if (this.props.noSidebar === false) {
            var new_latitude = nextProps.currentEventLocation.latitude;
            var new_longitude = nextProps.currentEventLocation.longitude;
            if (new_latitude != null && new_longitude != null) {
                this.setState({ lat: new_latitude, lng: new_longitude });
            }
        }
    }
    getPrivateEvent = _ => {
        fetch('http://proj309-tg-07.misc.iastate.edu:8080/privateevents')
            .then(response => response.json())
            .then(response => this.setState({ privateLocation: response.data }))
            // .then({data})=>{
            //   console.log(data)
            // })
            .catch(err => console.log(err))
        //console.log(this.state.alluser);
    }
    passInfoToBox = (values) => {
        if (this.props.noSidebar === false)
            this.props.callbackFromParent(values);
        this.setState({ lat: values.latitude, lng: values.longitude })
    }
    getUsersInfo = _ => {
        //fetch('http://proj309-tg-07.misc.iastate.edu:8080/events')
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
        let display
        if (this.props.login) {
            display = <this.Example components={this.state.privateLocation} />
        }
        if (this.state.onSub == 1) {
            this.addAddr(this.state.result);
            this.state.onSub = this.state.onSub - 1;
        }
        return (
            <div className="map_wrapper">
                <Card id="top_location_search">
                    <form id="searchbar_text">
                        <TextField
                            label="Search an address"
                            name="searchbar"
                            value={this.state.value}
                            onChange={this.handleChange}
                            margin="none"
                        />
                        <Button id="top_location_search_button" onClick={this.handleSubmit} variant="contained" >
                            Search
                        </Button>
                    </form>
                </Card>
                <Map className="map" center={this.state} zoom={this.state.zoom}>

                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {display}
                    <this.Example components={this.state.allLocation} />
                </Map>
            </div >
        );
    }
}

export default Mapbox;