import Resume from 'components/Resume';
const docLink =
    'https://docs.google.com/document/d/1tz5miRPmyE0gqlwPsJqIqnnH8Y8QKbLkO_1dt4NHyAM/export?format=pdf';

const Front = (props) => {
    return (
        <div className="front__container">
            <div className="avatar-container">
                <img
                    id="avatar"
                    src="assets/avatar.svg"
                    alt="Ian Rackson Avatar"
                />
            </div>
            <div>
                <h2>
                    <span className="front__ian">IAN</span>{' '}
                    <span className="front__rackson">RACKSON</span>
                </h2>
                <h3>
                    <span className="front__fullstack">Full-Stack</span>{' '}
                    <span className="front__webdev">Web Dev</span>
                </h3>
            </div>
            <div
                style={
                    !props.isFlipped
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                }
            >
                <Resume docLink={docLink} isAbout={false}></Resume>
            </div>

            <button
                className="btn draw-border"
                onClick={(e) => props.toggleCard(e)}
            >
                Contact Info
            </button>
        </div>
    );
};

export default Front;
