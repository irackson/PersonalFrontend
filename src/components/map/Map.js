import { useRef, useEffect } from 'react';
import styles from 'components/map/Map.module.css';
import mapStyle from 'components/map/map-style';
// https://stackoverflow.com/questions/59282213/react-warning-non-passive-event-listener-to-a-scroll-blocking-touchstart
const Map = (props) => {
    const mapDiv = useRef();
    useEffect(() => {
        if (props.coordinates.lat && props.coordinates.lng) {
            const location = {
                lat: props.coordinates.lat,
                lng: props.coordinates.lng,
            };
            const map = new window.google.maps.Map(mapDiv.current, {
                zoom: props.zoom || 12,
                center: location,
                disableDefaultUI: true,
                styles: mapStyle,
            });
            new window.google.maps.Marker({
                position: location,
                map: map,
            });
        }
    }, [props.coordinates.lat, props.coordinates.lng, props.zoom]);

    return (
        <div>
            <div ref={mapDiv} className={styles.Map}></div>
        </div>
    );
};

export default Map;
