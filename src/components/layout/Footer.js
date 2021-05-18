import Subscribe from 'components/layout/Subscribe';

import { StyleContext } from 'components/providers/ThemeProvider';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';
import { doSubscribe } from 'utils/api';

const relativePath = 'src/components/layout/Footer';
const styledComponentNames = ['FooterContainer'];

const FooterContainer = styled.footer`
    border-radius: ${(props) => props.FooterContainer_props['border-radius']};
    border: ${(props) => props.FooterContainer_props['border']};
    font-size: ${(props) => props.FooterContainer_props['font-size']};
    background-color: ${(props) =>
        props.FooterContainer_props['background-color']};
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
            console.error(error.message);
        }
    }

    const [subState, setSubState] = useState({
        projects: localStorage.getItem('projects') === 'true',
        blog: localStorage.getItem('blog') === 'true',
    });
    console.log(subState);

    const processSubscription = async (formData) => {
        const response = await doSubscribe(formData);
        localStorage.setItem('projects', response.projects?.toString());
        localStorage.setItem('blog', response.blog?.toString());
        setSubState({ projects: response.projects, blog: response.blog });
    };

    return (
        <FooterContainer FooterContainer_props={FooterContainer_props}>
            {!subState.projects || !subState.blog ? (
                <Subscribe
                    subState={subState}
                    processSubscription={processSubscription}
                ></Subscribe>
            ) : (
                <h4>Thank you for subscribing!</h4>
            )}
        </FooterContainer>
    );
}

export default Footer;
