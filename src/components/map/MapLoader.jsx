import { useEffect, useState } from 'react';
import { getLatLngFromInput } from '../../services/geolocation';
import Map from 'components/map/Map';

const MapLoader = (props) => {
    const [coor, setCoor] = useState(null);

    const getCoor = async (location) => {
        const calculatedCoor = await getLatLngFromInput(location);
        setCoor(calculatedCoor);
    };

    useEffect(() => {
        setCoor(getCoor(props.location));
        // setCoor(getCoor());
    }, [props.location]);
    // }, []);

    const loaded = () => {
        return <Map coordinates={coor} zoom={12.15}></Map>;
    };

    const loading = () => {
        return <p>finding coordinates of location...</p>;
    };

    return coor ? loaded() : loading();
};

export default MapLoader;
