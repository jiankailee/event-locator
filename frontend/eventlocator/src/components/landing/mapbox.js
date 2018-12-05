import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../App.css';
import L from 'leaflet';
import Geocode from 'react-geocode'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import location from 'browser-location';

delete L.Icon.Default.prototype._getIconUrl;
Geocode.setApiKey("AIzaSyBgd1QZKo1cbcKgiHoWbr6pcBTsrssKzT4");

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const iconRed = new L.Icon({
    iconRetinaUrl: require('../Icons/marker-icon-red.png'),
    iconUrl: require('../Icons/marker-icon-red-small.png'),
    shadowUrl: require('../Icons/marker-shadow.png'),
    iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 40],  // the same for the shadow
    popupAnchor: [0, -35],// point from which the popup should open relative to the iconAnchor
});

const iconYellow = new L.Icon({
    iconRetinaUrl: require('../Icons/marker-icon-yellow.png'),
    iconUrl: require('../Icons/marker-icon-yellow-small.png'),
    shadowUrl: require('../Icons/marker-shadow.png'),
    iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 40],  // the same for the shadow
    popupAnchor: [0, -35],// point from which the popup should open relative to the iconAnchor
});

const iconBlue = new L.Icon({
    iconRetinaUrl: require('../Icons/marker-icon-2x.png'),
    iconUrl: require('../Icons/marker-icon.png'),
    shadowUrl: require('../Icons/marker-shadow.png'),
    iconAnchor: [12, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 40],  // the same for the shadow
    popupAnchor: [0, -35],// point from which the popup should open relative to the iconAnchor
});

class Mapbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.runLocation = this.runLocation.bind(this);
    }
    state = {
        value: '',
        result: '',
        onSub: 0,
        currentMarkerName: "",
        lat: 0,
        lng: 0,
        zoom: 1,
        allLocation: [],
        privateLocation: [],
        currentMarkerLocation: [],
    }
    runLocation() {
        var temp_lat = 0, temp_lng = 0;
        location.get(function (err, position) {
            if (position !== null && position !== 'undefined' && position !== undefined) {
                temp_lat = position.coords.latitude;
                temp_lng = position.coords.longitude;
                this.setState({ lat: temp_lat, lng: temp_lng, zoom: 14, currentMarkerLocation: [temp_lat, temp_lng], currentMarkerName: "Current Location" })
            }
            if(err != null){
                console.log(err);
            }
        }.bind(this))
    }
    Example = ({ markerColor, components }) => (
        <div>
            {components.map((component, i) => <Marker key={i} icon={markerColor} position={[component.latitude, component.longitude]}>
                <Popup onOpen={() => this.passInfoToBox(component)}>
                    {component.eventName}
                </Popup>
            </Marker>)}
        </div>
    )
    componentDidMount() {
        this.getUsersInfo();
        this.getPrivateEvent();
        console.log(this.props.login)
        this.runLocation();
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ value: this.state.value, result: this.state.value, onSub: 1 });
    }
    addAddr(inputAddress) {
        Geocode.fromAddress(inputAddress).then(
            response => {
                if (response.results[0].geometry.location.lat != null && response.results[0].geometry.location.lng != null)
                    this.setState({ lat: response.results[0].geometry.location.lat, lng: response.results[0].geometry.location.lng, currentMarkerName: response.results[0].formatted_address, currentMarkerLocation: [response.results[0].geometry.location.lat, response.results[0].geometry.location.lng] });
            },
            error => {
                console.error(error);
            }
        )
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.noSidebar === false && nextProps.currentEventLocation != null) {
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
        let display;
        let resultMarker, publicEvents;
        if (this.props.showPrivate === true) {
            publicEvents = null;
        }
        else {
            publicEvents = <this.Example markerColor={iconBlue} components={this.state.allLocation} />;
        }
        if (this.props.login) {
            display = <this.Example markerColor={iconYellow} components={this.state.privateLocation} />
        }
        if (this.state.onSub === 1) {
            this.addAddr(this.state.result);
            this.setState({ onSub: this.state.onSub - 1 })
        }
        if (this.state.currentMarkerLocation != null && this.state.currentMarkerLocation[0] != null && this.state.currentMarkerLocation[1] != null) {
            resultMarker = <Marker icon={iconRed} position={[this.state.currentMarkerLocation[0], this.state.currentMarkerLocation[1]]}><Popup>{this.state.currentMarkerName}</Popup></Marker>
        }
        else {
            resultMarker = null;
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
                    {resultMarker}
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {display}
                    {publicEvents}
                </Map>
            </div >
        );
    }
}

export default Mapbox;