import { StyleContext } from 'components/providers/ThemeProvider';
import Prism from 'prismjs';
import { useEffect, useState, useContext } from 'react';

const baseURL = process.env.REACT_APP_BASE_URL;

const Markdown = (props) => {
    const { themes } = useContext(StyleContext);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [sheet, setSheet] = useState(null);

    useEffect(() => {
        console.log(themes.currentTheme);
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
                setSheet('prism/prism-tomorrownight.css');
                break;

            default:
                setSheet('prism/prism-tomorrownight.css');
                break;
        }
    }, [themes.currentTheme]);

    return (
        <>
            <link rel="stylesheet" href={`${baseURL}/${sheet}`} />

            <div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.sanitizedHtml,
                    }}
                ></div>
            </div>
        </>
    );
};

export default Markdown;
