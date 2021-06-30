import BusinessCard from 'components/business-card/BusinessCard';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const SliderCard = styled.div`
    /* display: flex; */
    position: relative;
    /* border: 1px solid magenta; */
    min-height: 400px;
    width: 100%;
    text-align: center !important;
    text-overflow: ellipsis !important;
    overflow: visible !important;

    img {
        margin: auto;
        padding-left: 10px;
        padding-right: 10px;
        max-height: 200px;
        /* width: 25%; */
        /* height: 60%; */
    }

    div.description {
        position: absolute;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        /* overflow: visible !important; */
        /* bottom: 0; */
        /* height: 100px; */
        width: 100%;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
`;

const Section = styled.section`
    /* display: flex; */
    /* justify-content: center; */
    /* flex-direction: column; */
`;

const Home = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson';
    }, []);
    const loaded = () => {
        return (
            // BUGFIX: update nav button colors when featured blog/project clicked
            <>
                <div className="featured-project">
                    <div>
                        Featured Project:
                        {props.featuredProject ? (
                            <SliderCard>
                                <Link
                                    to={`/projects/${props.featuredProject.slug}`}
                                >
                                    <h3>{props.featuredProject.title}</h3>
                                </Link>
                                <a
                                    href={props.featuredProject.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={props.featuredProject.thumbnail}
                                        alt={props.featuredProject.slug}
                                    />
                                </a>
                                <div className="description">
                                    <h4>{props.featuredProject.description}</h4>
                                </div>
                            </SliderCard>
                        ) : null}
                    </div>
                </div>
                <div className="featured-blog">
                    <div>
                        Featured Blog:
                        {props.featuredBlog ? (
                            <SliderCard>
                                <Link to={`/blog/${props.featuredBlog.slug}`}>
                                    <h3>{props.featuredBlog.title}</h3>
                                </Link>
                                <img
                                    src={props.featuredBlog.thumbnail}
                                    alt={props.featuredBlog.slug}
                                />
                                <div className="description">
                                    <h4>{props.featuredBlog.description}</h4>
                                </div>
                            </SliderCard>
                        ) : null}
                    </div>
                </div>
            </>
        );
    };

    const loading = () => {
        return (
            <>
                <div className="featured-project">Featured Project:</div>
                <div className="featured-blog">Featured Blog:</div>
            </>
        );
    };

    return (
        <Section className="home">
            <BusinessCard className="business-card"></BusinessCard>
            {props.isLoaded ? loaded() : loading()}
        </Section>
    );
};

export default Home;
