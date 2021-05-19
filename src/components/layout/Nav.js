import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { StyleContext } from 'components/providers/ThemeProvider';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';

const relativePath = 'src/components/layout/Nav';
const styledComponentNames = ['ActiveNavButton', 'InactiveNavButton'];

const ActiveNavButton = styled.button`
    background: ${(props) => props.ActiveNavButton_props['background']};
    color: ${(props) => props.ActiveNavButton_props['color']};
    outline: ${(props) => props.ActiveNavButton_props['outline']};
    min-width: 9ch;
`;
const ActiveNavButton_props = {};

const InactiveNavButton = styled.button`
    background: ${(props) => props.InactiveNavButton_props['background']};
    color: ${(props) => props.InactiveNavButton_props['color']};
    min-width: 9ch;
`;
const InactiveNavButton_props = {};

const Nav = (props) => {
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

    const history = useHistory(null);
    const [currentPage, setCurrentPage] = useState(history.location.pathname);

    const isCurrentPage = (page) => {
        let style = null;
        if (currentPage.match(`${page}`)) {
            style = true;
        } else {
            style = false;
        }
        if (
            currentPage.match(`${page}`) &&
            page === '/' &&
            currentPage !== '/'
        ) {
            style = false;
        }
        return style;
    };

    const [locationKeys, setLocationKeys] = useState([]);

    useEffect(() => {
        return history.listen((location) => {
            if (history.action === 'PUSH') {
                setLocationKeys([location.key]);
            }

            if (history.action === 'POP') {
                if (locationKeys[1] === location.key) {
                    setLocationKeys(([_, ...keys]) => keys);
                    setCurrentPage(history.location.pathname);

                    // Handle forward event
                } else {
                    setLocationKeys((keys) => [location.key, ...keys]);

                    setCurrentPage(history.location.pathname);
                    // Handle back event
                }
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationKeys]);

    const pages = [
        { dir: '/', name: 'home' },
        { dir: '/settings', name: 'settings' },
        { dir: '/blog', name: 'blog' },
        { dir: '/projects', name: 'projects' },
        { dir: '/resume', name: 'resume' },
        { dir: '/about', name: 'about' },
        { dir: '/metrics', name: 'metrics' },
    ];
    return (
        <nav>
            {pages.map((p) => (
                <Link to={p.dir} key={p.dir}>
                    {isCurrentPage(p.dir) ? (
                        <ActiveNavButton
                            ActiveNavButton_props={ActiveNavButton_props}
                            onClick={() => setCurrentPage(p.dir)}
                        >
                            {p.name.toUpperCase()}
                        </ActiveNavButton>
                    ) : (
                        <InactiveNavButton
                            InactiveNavButton_props={InactiveNavButton_props}
                            onClick={() => setCurrentPage(p.dir)}
                        >
                            {p.name.toLowerCase()}
                        </InactiveNavButton>
                    )}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
