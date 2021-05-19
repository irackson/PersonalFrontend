import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const OnButton = styled.button`
    background-color: red;
    outline: 1px dashed white;
`;

const OffButton = styled.button`
    background-color: green;
    outline: 2px solid black;
`;

const Nav = (props) => {
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
                <Link to={p.dir}>
                    {isCurrentPage(p.dir) ? (
                        <OnButton onClick={() => setCurrentPage(p.dir)}>
                            {p.name.toUpperCase()}
                        </OnButton>
                    ) : (
                        <OffButton onClick={() => setCurrentPage(p.dir)}>
                            {p.name.toLowerCase()}
                        </OffButton>
                    )}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
