import { StyleContext } from 'components/providers/ThemeProvider';

import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/layout/GlobalStyle';
const styledComponentNames = ['GlobalContainer'];

const GlobalContainer = styled.div`
    font-size: ${(props) => props.GlobalContainer_props['font-size']};
    font-family: ${(props) => props.GlobalContainer_props['font-family']};
    color: ${(props) => props.GlobalContainer_props['color']};
    background: ${(props) => props.GlobalContainer_props['background']};
    padding: ${(props) => props.GlobalContainer_props['padding']};
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-width: 100vw !important;
    overflow-x: hidden;
`;
const GlobalContainer_props = {};

function GlobalStyle(props) {
    const { styles, themes } = useContext(StyleContext);
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
        <GlobalContainer GlobalContainer_props={GlobalContainer_props}>
            {props.children}
        </GlobalContainer>
    );
}

export default GlobalStyle;
