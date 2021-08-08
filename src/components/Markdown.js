import { StyleContext } from 'components/providers/ThemeProvider';
import Prism from 'prismjs';
import { useEffect, useState, useContext } from 'react';
import 'styles/app/markdown.scss';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/Markdown';
const styledComponentNames = ['MarkdownHeading', 'MarkdownCode'];

const MarkdownHeading = styled.div`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${(props) => props.MarkdownHeading_props['color']};
    }
`;
const MarkdownHeading_props = {};

const MarkdownCode = styled.div`
    pre code,
    pre span {
        /* text-align: ${(props) => props.MarkdownCode_props['text-align']}; */
        line-height: ${(props) => props.MarkdownCode_props['line-height']};
        white-space: ${(props) => props.MarkdownCode_props['white-space']};
        color: ${(props) => props.MarkdownCode_props['color']};
        background: ${(props) => props.MarkdownCode_props['background']};
        /* flex-direction: row-reverse !important; */
        padding: 0 !important;
    }
`;
const MarkdownCode_props = {};

const baseURL = process.env.REACT_APP_BASE_URL;

const Markdown = (props) => {
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

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [sheet, setSheet] = useState(null);

    useEffect(() => {
        switch (themes.currentTheme) {
            case 'light':
                setSheet('prism/prism-coy.css');
                break;
            case 'dark':
                setSheet('prism/prism-twilight.css');
                break;
            case 'minimal':
                setSheet('prism/prism-solarizedlight.css');
                break;
            case 'fun':
                setSheet('prism/prism-funky.css');
                break;
            case 'custom':
                setSheet('');
                break;

            default:
                setSheet('prism/prism-tomorrownight.css');
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themes.currentTheme]);

    return (
        <div className="markdown">
            <MarkdownHeading MarkdownHeading_props={MarkdownHeading_props}>
                <MarkdownCode MarkdownCode_props={MarkdownCode_props}>
                    <link rel="stylesheet" href={`${baseURL}/${sheet}`} />
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: props.sanitizedHtml,
                            }}
                        ></div>
                    </div>
                </MarkdownCode>
            </MarkdownHeading>
        </div>
    );
};

export default Markdown;
