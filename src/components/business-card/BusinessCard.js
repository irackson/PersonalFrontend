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
        <div
        //! Disable until styling
        // onMouseEnter={(e) => toggleCard(e)}
        // onMouseLeave={(e) => toggleCard(e)}
        >
            {flipToggle ? <Back></Back> : <Front></Front>}
        </div>
    );
};

export default BusinessCard;
