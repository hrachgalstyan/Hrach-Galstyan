import React from 'react'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import mapStyles from './mapStyles'

const mapContainerStyle = {
    height: "80vh",
    width: "100vw",
};

const markerStyle = {
    background: '#000000'
}

const center = {
    lat: 40.177200, 
    lng: 44.503490
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    gestureHandling: 'cooperative'
}

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyChnzJh5EqmIKYd4eVOA-6jTj3oAbjSHUI",
    });
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle}
                zoom={2.4}
                center={center}
                options={options}
            >
                <Marker position={center}>
                <InfoWindow
                    visible={true}
                    position={{lat:50.490408,lng: 44.415527}}
                    style={markerStyle}>
                    <div className="text-center" style={{width: '260px', fontFamily: 'Roboto', fontSize: '16px'}}>
                        <div style={{height: '20px'}}>
                            <div style={{float: 'left', padding: '3px 0 0 6px'}}>Hrach Galstyan</div>
                        </div>
                        <div style={{height: '20px'}}>
                            <div style={{float: 'left', padding: '3px 0 0 6px'}}>Armenia, AM, Yerevan</div>
                        </div>
                        <div style={{height: '20px', clear: 'both'}}>
                            <div style={{float: 'left', padding: '3px 0 0 6px'}}>@:</div>
                            <div style={{float: 'left', padding: "3px", color: '#3497d9'}}><a href="mailto:hrachgalstyann@gmail.com">hrachgalstyann@gmail.com</a></div>
                        </div>
                    </div>
                </InfoWindow>
                </Marker>
                
            </GoogleMap>
        </div>
    )
}
