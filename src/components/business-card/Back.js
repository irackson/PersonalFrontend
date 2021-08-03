import MapLoader from 'components/map/MapLoader';

const Back = (props) => {
    return (
        <div className="back">
            <div></div>
            <div>
                <MapLoader></MapLoader>
                <section className="back__text-container">
                    <p>(917) 684-8443</p>
                    <br />
                    <a href="mailto:ian@rackson.com">ian@rackson.com</a>
                </section>
            </div>
            <button
                className="btn draw-border"
                onClick={(e) => props.toggleCard(e)}
            >
                Flip Back
            </button>
        </div>
    );
};

export default Back;
