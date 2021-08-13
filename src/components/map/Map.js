import { useRef, useEffect } from 'react';
import styles from 'components/map/Map.module.css';
import mapStyle from 'components/map/map-style';
import GoogleMapReact from 'google-map-react';
const mapsKey = process.env.REACT_APP_MAPS_API;

const LocationPin = ({ text }) => <div className={styles.Pointer}>{text}</div>;

let defaultCoor = { lat: 40.7757341, lng: -73.981945 };

const Map = ({ coordinates, zoom }) => {
    const printMap = () => {
        return (
            <div className={styles.Map}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: mapsKey }}
                    center={coordinates}
                    defaultCenter={defaultCoor}
                    defaultZoom={zoom || 12}
                    options={{
                        disableDefaultUI: false,
                        styles: mapStyle,
                        clickableIcons: true,
                        fullscreenControl: false,
                        noClear: true,
                        streetViewControl: false,
                    }}
                >
                    <LocationPin
                        lat={coordinates.lat}
                        lng={coordinates.lng}
                        text=""
                    />
                </GoogleMapReact>
            </div>
        );
    };

    return coordinates ? (
        printMap()
    ) : (
        <div>
            <div className={styles.Placeholder}></div>
        </div>
    );
};

export default Map;

// https://stackoverflow.com/questions/59282213/react-warning-non-passive-event-listener-to-a-scroll-blocking-touchstart
// const Map = (props) => {
//     const mapDiv = useRef();
//     useEffect(() => {
//         if (
//             window.google?.maps &&
//             mapDiv.current &&
//             props.coordinates.lat &&
//             props.coordinates.lng
//         ) {
//             const location = {
//                 lat: props.coordinates.lat,
//                 lng: props.coordinates.lng,
//             };
//             const map = new window.google.maps.Map(mapDiv.current, {
//                 zoom: props.zoom || 12,
//                 center: location,
//                 disableDefaultUI: true,
//                 styles: mapStyle,
//                 // draggable: false,
//                 keyboardShortcuts: false,
//                 // gestureHandling: 'none',
//                 clickableIcons: false,
//                 fullscreenControl: false,
//                 noClear: true,
//                 streetViewControl: false,
//                 // zoomControl: false,
//                 // draggableCursor: '_, auto',
//                 // draggingCursor: '_, auto',
//             });
//             new window.google.maps.Marker({
//                 position: location,
//                 map: map,
//                 // clickable: true,
//             });
//         }
//     }, [props.coordinates.lat, props.coordinates.lng, props.zoom]);

//     const googleLoaded = () => {
//         return (
//             <div>
//                 <div ref={mapDiv} className={styles.Map}></div>
//             </div>
//         );
//     };

//     const googleLoading = () => {
//         return (
//             <div>
//                 <div ref={mapDiv} className={styles.Placeholder}></div>
//             </div>
//         );
//     };

//     return window.google?.maps && mapDiv.current
//         ? googleLoaded()
//         : googleLoading();
// };

// export default Map;
