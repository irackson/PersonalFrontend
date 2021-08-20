import { useContext } from 'react';
import { StyleContext } from 'components/providers/ThemeProvider';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/layout/ThemeApplicator';
const styledComponentNames = ['ActiveThemeButton', 'InactiveThemeButton'];

const ActiveThemeButton = styled.button`
    background: ${(props) => props.ActiveThemeButton_props['background']};
    color: ${(props) => props.ActiveThemeButton_props['color']};
    outline: ${(props) => props.ActiveThemeButton_props['outline']};
    min-width: 9ch;
`;
const ActiveThemeButton_props = {};

const InactiveThemeButton = styled.button`
    background: ${(props) => props.InactiveThemeButton_props['background']};
    color: ${(props) => props.InactiveThemeButton_props['color']};
    min-width: 9ch;
`;
const InactiveThemeButton_props = {};

const ThemeApplicator = (props) => {
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    const styledCommands = getStyledCommands(
        styles,
        themes.currentTheme,
        styledComponentNames,
        relativePath
    );
    for (let i = 0; i < styledCommands.length; i++) {
        try {
            // eslint-disable-next-line no-eval
            eval(styledCommands[i]);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        // TODO: Style theme applicator
        <nav style={{ display: 'none' }}>
            {/* <nav> */}
            <ActiveThemeButton
                ActiveThemeButton_props={ActiveThemeButton_props}
                type="button"
                onClick={() => {
                    updateThemeSelection(themes.currentTheme);
                }}
            >
                {themes.currentTheme.toUpperCase()}
            </ActiveThemeButton>
            {themes.otherThemes.map((e) => (
                <InactiveThemeButton
                    InactiveThemeButton_props={InactiveThemeButton_props}
                    type="button"
                    key={e}
                    onClick={() => {
                        updateThemeSelection(e);
                    }}
                >
                    {e}
                </InactiveThemeButton>
            ))}
        </nav>
    );
};

export default ThemeApplicator;
