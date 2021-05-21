import BusinessCard from 'components/business-card/BusinessCard';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 30ch;

    ul {
        list-style: none;
        li {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
`;

const Home = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson';
    }, []);
    const loaded = () => {
        return (
            <Section>
                <ul>
                    <li>
                        Featured Project:
                        {props.featuredProject ? (
                            <Link
                                to={`/projects/${props.featuredProject.slug}`}
                            >
                                <p>{props.featuredProject.title}</p>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        Featured Blog:
                        {props.featuredBlog ? (
                            <Link to={`/blog/${props.featuredBlog.slug}`}>
                                <p>{props.featuredBlog.title}</p>
                            </Link>
                        ) : null}
                    </li>
                </ul>
            </Section>
        );
    };

    const loading = () => {
        return (
            <Section>
                <BusinessCard></BusinessCard>
            </Section>
        );
    };

    return (
        <div>
            {loading()}
            {props.isLoaded ? loaded() : null}
        </div>
    );
};

export default Home;
