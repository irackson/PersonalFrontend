import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = (props) => {
    const history = useHistory(null);
    const [currentPage, setCurrentPage] = useState(history.location.pathname);

    const getStyle = (page) => {
        if (currentPage.match(`${page}`)) {
            return { backgroundColor: 'red' };
        } else {
            return { backgroundColor: 'green' };
        }
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

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    return (
        <nav>
            <Link to="/">
                <button
                    style={getStyle('/home')}
                    onClick={() => setCurrentPage('/home')}
                >
                    HOME
                </button>
            </Link>
            <Link to="/settings">
                <button
                    style={getStyle('/settings')}
                    onClick={() => setCurrentPage('/settings')}
                >
                    SETTINGS
                </button>
            </Link>
            <Link to="/blog">
                <button
                    style={getStyle('/blog')}
                    onClick={() => setCurrentPage('/blog')}
                >
                    BLOG
                </button>
            </Link>
            <Link to="/projects">
                <button
                    style={getStyle('/projects')}
                    onClick={() => setCurrentPage('/projects')}
                >
                    PROJECTS
                </button>
            </Link>
            <Link to="/resume">
                <button
                    style={getStyle('/resume')}
                    onClick={() => setCurrentPage('/resume')}
                >
                    RESUME
                </button>
            </Link>
            <Link to="/about">
                <button
                    style={getStyle('/about')}
                    onClick={() => setCurrentPage('/about')}
                >
                    ABOUT
                </button>
            </Link>
            <Link to="/metrics">
                <button
                    style={getStyle('/metrics')}
                    onClick={() => setCurrentPage('/metrics')}
                >
                    METRICS
                </button>
            </Link>
        </nav>
    );
};

export default Nav;
