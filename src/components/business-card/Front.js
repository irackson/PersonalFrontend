const Front = (props) => {
    return (
        <div className="front__container">
            <div></div>
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
