import { StyleContext } from 'components/providers/ThemeProvider';
import Prism from 'prismjs';
import { useEffect, useState, useContext } from 'react';

const Markdown = (props) => {
    const { themes } = useContext(StyleContext);
    // console.log(themes);
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const [sheet, setSheet] = useState(null);

    const baseURL =
        process.env.NODE_ENV === 'production'
            ? 'https://ianrackson.com'
            : 'http://localhost:3000';

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
