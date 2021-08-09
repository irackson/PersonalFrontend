import { openPopupWidget } from 'react-calendly';

const CustomButton = ({ url, prefill, pageSettings, utm }) => {
    const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
    return (
        <button id="calendly-button" onClick={onClick}>
            Let's Zoom!
        </button>
    );
};

export default CustomButton;
