import MapLoader from 'components/map/MapLoader';

const Back = (props) => {
    return (
        <div className="back">
            <div></div>
            <div>
                <MapLoader></MapLoader>
                <section className="back__text-container">
                    <a href="tel:917-684-8443">(917) 684-8443</a>
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
