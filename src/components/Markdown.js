import Prism from 'prismjs';
import { useEffect } from 'react';

const Markdown = (props) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-dark.min.css"
                integrity="sha512-Njdz7T/p6Ud1FiTMqH87bzDxaZBsVNebOWmacBjMdgWyeIhUSFU4V52oGwo3sT+ud+lyIE98sS291/zxBfozKw=="
                crossOrigin="anonymous"
            />
            <div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.sanitizedHtml,
                    }}
                ></div>
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
                    integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg=="
                    crossOrigin="anonymous"
                ></script>
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"
                    integrity="sha512-zc7WDnCM3aom2EziyDIRAtQg1mVXLdILE09Bo+aE1xk0AM2c2cVLfSW9NrxE5tKTX44WBY0Z2HClZ05ur9vB6A=="
                    crossOrigin="anonymous"
                ></script>
            </div>
        </>
    );
};

export default Markdown;
