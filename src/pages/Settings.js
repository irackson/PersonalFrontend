import { StyleContext } from 'components/providers/ThemeProvider';
import ThemeCustomizer from 'components/user/ThemeCustomizer';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Settings(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    return (
        <>
            <h2>Customize your Own Theme!</h2>{' '}
            <ThemeCustomizer></ThemeCustomizer>
        </>
    );
}

export default Settings;
