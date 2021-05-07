import ThemeApplicator from 'components/user/ThemeApplicator';
import { Link } from 'react-router-dom';

import { StyleContext } from 'components/providers/ThemeProvider';
import { useContext } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/layout/Footer';
const styledComponentNames = ['FooterContainer'];

const FooterContainer = styled.footer`
    border-radius: ${(props) => props.FooterContainer_props['border-radius']};
    border: ${(props) => props.FooterContainer_props['border']};
    font-size: ${(props) => props.FooterContainer_props['font-size']};
    background-color: ${(props) =>
        props.FooterContainer_props['background-color']};
    padding-top: 10px;
    height: min-content;

    p {
        padding: 0px;
        margin: 0px;
        font-weight: bold;
    }
`;
const FooterContainer_props = {};

function Footer() {
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
            console.error(
                '🚀 ~ file: WeatherIcon.js ~ line 39 ~ WeatherIcon ~ error',
                error.message
            );
        }
    }

    return (
        <FooterContainer FooterContainer_props={FooterContainer_props}>
            {/* <p>manage theme</p> */}
            <ThemeApplicator></ThemeApplicator>
        </FooterContainer>
    );
}

export default Footer;
