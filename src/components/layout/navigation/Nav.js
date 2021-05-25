import 'components/layout/navigation/Nav.scss';
import { StyleContext } from 'components/providers/ThemeProvider';
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getStyledCommands } from 'utils/theme-helper';
const relativePath = 'src/components/layout/Nav';
const styledComponentNames = [
    'ActiveNavButton',
    'InactiveNavButton',
    'PageNav',
];

const ActiveNavButton = styled.button`
    background: ${(props) => props.ActiveNavButton_props['background']};
    color: ${(props) => props.ActiveNavButton_props['color']};
    border-radius: 50%;
`;
const ActiveNavButton_props = {};

const InactiveNavButton = styled.button`
    background: ${(props) => props.InactiveNavButton_props['background']};
    color: ${(props) => props.InactiveNavButton_props['color']};
    border-radius: 50%;
`;
const InactiveNavButton_props = {};

const PageNav = styled.nav`
    .circle-nav-panel {
        background: ${(props) => props.PageNav_props['background']};
    }

    @media (min-width: 769px) {
        &.circle-nav-wrapper {
            background: ${(props) => props.PageNav_props['background']};
        }
    }

    &.circle-nav-open {
        opacity: ${(props) => props.PageNav_props['opacity']};
    }
`;
const PageNav_props = {};

const Nav = (props) => {
    const [clickToggle, setClickToggle] = useState(false);

    const toggleClick = (e) => {
        e.preventDefault();
        console.log(clickToggle);
        setClickToggle(!clickToggle);
    };

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

    // const homePage = { dir: '/', name: 'home' };
    const pages = [
        { dir: '/', name: 'home', className: 'fas fa-home' },
        { dir: '/about', name: 'about', className: 'fas fa-info-circle' },
        // { dir: '/resume', name: 'resume', className: 'fas fa-file' },
        { dir: '/projects', name: 'projects', className: 'fas fa-briefcase' },
        { dir: '/blog', name: 'blog', className: 'fas fa-blog' },
        { dir: '/metrics', name: 'metrics', className: 'fas fa-chart-line' },
        // { dir: '/settings', name: 'settings', className: 'fas fa-palette' },
    ];
    return (
        <div className="circle-nav-overlay">
            <PageNav
                PageNav_props={PageNav_props}
                id="circle-nav-wrapper"
                className={`circle-nav-wrapper ${
                    clickToggle ? 'circle-nav-open' : ''
                }`}
            >
                <div
                    className={`circle-nav-toggle ${
                        clickToggle ? 'circle-nav-open' : ''
                    }`}
                    onClick={(e) => toggleClick(e)}
                >
                    <i className="fas fa-plus material-icons"></i>
                </div>
                <div
                    className={`circle-nav-panel ${
                        clickToggle ? 'circle-nav-open' : ''
                    }`}
                ></div>
                <ul
                    className={`circle-nav-menu ${
                        clickToggle ? 'circle-nav-open' : ''
                    }`}
                >
                    {pages.map((p, i) => (
                        <li
                            className={`circle-nav-item circle-nav-item-${
                                i + 1
                            }`}
                            key={p.dir}
                        >
                            <Link to={p.dir}>
                                {isCurrentPage(p.dir) ? (
                                    <ActiveNavButton
                                        ActiveNavButton_props={
                                            ActiveNavButton_props
                                        }
                                        onClick={() => setCurrentPage(p.dir)}
                                    >
                                        <i
                                            className={`${p.className} material-icons`}
                                        ></i>
                                        {/* {p.name.toUpperCase()} */}
                                    </ActiveNavButton>
                                ) : (
                                    <InactiveNavButton
                                        InactiveNavButton_props={
                                            InactiveNavButton_props
                                        }
                                        onClick={() => setCurrentPage(p.dir)}
                                    >
                                        <i
                                            className={`${p.className} material-icons`}
                                        ></i>
                                        {/* {p.name.toLowerCase()} */}
                                    </InactiveNavButton>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </PageNav>
        </div>
    );
};

export default Nav;
