import { StyleContext } from 'components/providers/ThemeProvider';

import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';
import Nav from './Nav';

const relativePath = 'src/components/layout/Header';
const styledComponentNames = ['HeaderContainer'];

const HeaderContainer = styled.header`
    border-radius: ${(props) => props.HeaderContainer_props['border-radius']};
    border: ${(props) => props.HeaderContainer_props['border']};
    font-size: ${(props) => props.HeaderContainer_props['font-size']};
    background-color: ${(props) =>
        props.HeaderContainer_props['background-color']};
`;
const HeaderContainer_props = {};

const FlexBetween = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    /* flex-direction: row; */
`;

function Header() {
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
        <HeaderContainer HeaderContainer_props={HeaderContainer_props}>
            <div style={{ display: 'none' }}>
                <FlexBetween>
                    <Nav></Nav>
                </FlexBetween>
            </div>
        </HeaderContainer>
    );
}

export default Header;
