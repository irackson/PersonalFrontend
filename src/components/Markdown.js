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
            </div>
        </>
    );
};

export default Markdown;
