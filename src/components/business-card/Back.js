import MapLoader from 'components/map/MapLoader';

const Back = (props) => {
    return (
        <div className="back__container">
            <div></div>
            <div>
                <MapLoader></MapLoader>
                <aside>
                    <p>(917) 684-8443</p>
                    <p>ian@rackson.com</p>
                </aside>
                {/* <p>inasusr@gmail.com</p> */}
                {/* <p>ian@rackson.com</p> */}
            </div>
            <button onClick={(e) => props.toggleCard(e)}>Flip Back</button>
        </div>
    );
};

export default Back;
