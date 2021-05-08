import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyleContext } from 'components/providers/ThemeProvider';

function ThemeApplicator(props) {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    return (
        <div>
            {themes.otherThemes.map((e, i) => (
                <button
                    type="button"
                    key={e}
                    onClick={() => {
                        updateThemeSelection(e);
                    }}
                >
                    {e}
                </button>
            ))}
        </div>
    );
}

export default ThemeApplicator;
