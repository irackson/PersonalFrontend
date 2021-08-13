import MapLoader from 'components/map/MapLoader';
import Calendly from 'components/Calendly';

const Back = (props) => {
    const url = 'https://calendly.com/ianrackson';
    const prefill = {
        // email: 'test@test.com',
        // firstName: 'Jon',
        // lastName: 'Snow',
        // name: 'Jon Snow',
        // guests: ['janedoe@example.com', 'johndoe@example.com'],
        // customAnswers: {
        //     a1: 'a1',
        //     a2: 'a2',
        //     a3: 'a3',
        //     a4: 'a4',
        //     a5: 'a5',
        //     a6: 'a6',
        //     a7: 'a7',
        //     a8: 'a8',
        //     a9: 'a9',
        //     a10: 'a10',
        // },
        date: new Date(Date.now() + 86400000),
    };

    const pageSettings = {
        // backgroundColor: '#6b6ace',
        // hideEventTypeDetails: true,
        // hideLandingPageDetails: true,
        // primaryColor: '00a2ff',
        // textColor: '4d5055',
    };

    const utm = {
        // utmCampaign: 'Spring Sale 2019',
        // utmContent: 'Shoe and Shirts',
        // utmMedium: 'Ad',
        // utmSource: 'Facebook',
        // utmTerm: 'Spring',
    };

    return (
        <div className="back">
            <div></div>
            <div>
                <div
                    style={
                        props.isFlipped
                            ? { visibility: 'visible' }
                            : { visibility: 'hidden', transitionDelay: '160ms' }
                    }
                >
                    {/* add location string as prop, or don't for dev's coordinates */}
                    {/* <MapLoader location="New York City"></MapLoader> */}
                    <MapLoader></MapLoader>
                </div>
                <section className="back__text-container">
                    <div
                        className="calendly-container"
                        style={{
                            display: 'block',
                            margin: '0 auto',
                        }}
                    >
                        <Calendly
                            url={url}
                            prefill={prefill}
                            pageSettings={pageSettings}
                            utm={utm}
                        />
                    </div>
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
