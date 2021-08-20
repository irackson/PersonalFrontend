// import { StyleContext } from 'components/providers/ThemeProvider';
import ThemeCustomizer from 'components/user/ThemeCustomizer';
import { useEffect } from 'react';

function Settings(props) {
    useEffect(() => {
        document.title = 'Ian Rackson | Theme';
    }, []);
    // const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    return (
        <>
            <h2>Customize your Own Theme!</h2>{' '}
            <ThemeCustomizer></ThemeCustomizer>
        </>
    );
}

export default Settings;
