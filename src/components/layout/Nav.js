import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Nav = (props) => {
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState(history.location.pathname);

    const getStyle = (page) => {
        // TODO: account for slugs
        if (page === currentPage) {
            return { backgroundColor: 'red' };
        } else {
            return { backgroundColor: 'green' };
        }
    };

    return (
        <nav>
            <Link to="/">
                <button
                    style={getStyle('/')}
                    onClick={() => setCurrentPage('/')}
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
