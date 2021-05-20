import { StyleContext } from 'components/providers/ThemeProvider';
import ThemeCustomizer from 'components/user/ThemeCustomizer';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Settings(props) {
    useEffect(() => {
        document.title = 'Ian Rackson | Theme';
    }, []);
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    return (
        <>
            <h2>Customize your Own Theme!</h2>{' '}
            <ThemeCustomizer></ThemeCustomizer>
        </>
    );
}

export default Settings;
