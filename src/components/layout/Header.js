import { StyleContext } from 'components/providers/ThemeProvider';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';
import ThemeApplicator from 'components/user/ThemeApplicator';

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
    display: flex;
    justify-content: space-between;
    flex-direction: row;
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
            <FlexBetween>
                <nav>
                    <Link to="/">
                        <button>HOME</button>
                    </Link>
                    <Link to="/settings">
                        <button>SETTINGS</button>
                    </Link>
                </nav>
                <ThemeApplicator></ThemeApplicator>
            </FlexBetween>

            <h1>IAN RACKSON WEB DEV</h1>
        </HeaderContainer>
    );
}

export default Header;
