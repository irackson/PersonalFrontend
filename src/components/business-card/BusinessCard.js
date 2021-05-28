import ReactCardFlip from 'react-card-flip';

import Front from 'components/business-card/Front';
import Back from 'components/business-card/Back';
import { useState } from 'react';

const BusinessCard = (props) => {
    const [flipToggle, setFlipToggle] = useState(false);

    const toggleCard = (e) => {
        e.preventDefault();
        setFlipToggle(!flipToggle);
    };

    return (
        <div className="business__container">
            {/* https://github.com/AaronCCWong/react-card-flip */}
            <ReactCardFlip isFlipped={flipToggle} flipDirection="horizontal">
                <Front toggleCard={toggleCard}></Front>
                <Back toggleCard={toggleCard}></Back>
            </ReactCardFlip>
        </div>
    );
};

export default BusinessCard;
