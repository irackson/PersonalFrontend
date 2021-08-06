import { useRef, useEffect } from 'react';
import styles from 'components/map/Map.module.css';
import mapStyle from 'components/map/map-style';
// https://stackoverflow.com/questions/59282213/react-warning-non-passive-event-listener-to-a-scroll-blocking-touchstart
const Map = (props) => {
    const mapDiv = useRef();
    useEffect(() => {
        if (
            window.google?.maps &&
            mapDiv.current &&
            props.coordinates.lat &&
            props.coordinates.lng
        ) {
            const location = {
                lat: props.coordinates.lat,
                lng: props.coordinates.lng,
            };
            const map = new window.google.maps.Map(mapDiv.current, {
                zoom: props.zoom || 12,
                center: location,
                disableDefaultUI: true,
                styles: mapStyle,
                draggable: false,
                keyboardShortcuts: false,
                gestureHandling: 'none',
                clickableIcons: false,
                fullscreenControl: false,
                noClear: true,
                streetViewControl: false,
                zoomControl: false,
                draggableCursor: '_, auto',
                draggingCursor: '_, auto',
            });
            new window.google.maps.Marker({
                position: location,
                map: map,
                clickable: false,
            });
        }
    }, [props.coordinates.lat, props.coordinates.lng, props.zoom]);

    const googleLoaded = () => {
        return (
            <div>
                <div ref={mapDiv} className={styles.Map}></div>
            </div>
        );
    };

    const googleLoading = () => {
        return (
            <div>
                <div ref={mapDiv} className={styles.Placeholder}></div>
            </div>
        );
    };

    return window.google?.maps && mapDiv.current
        ? googleLoaded()
        : googleLoading();
};

export default Map;
