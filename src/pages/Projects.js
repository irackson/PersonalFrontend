import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import Slider from 'react-slick';

const SliderCard = styled.div`
    position: relative;
    max-width: 60ch;

    img {
        margin: auto;
        padding-left: 10px;
        padding-right: 10px;
        max-height: 200px;
    }

    div.title {
        font-size: 28px;
        font-weight: bolder;
        margin-bottom: 15px;
    }

    div.description {
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
    }
`;

const Project = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Projects';
    }, []);
    const loaded = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: Math.min(4, props.projects.length),
            slidesToScroll: Math.min(4, props.projects.length),
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(3, props.projects.length),
                        slidesToScroll: Math.min(3, props.projects.length),
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: Math.min(2, props.projects.length),
                        slidesToScroll: Math.min(2, props.projects.length),
                        initialSlide: Math.min(2, props.projects.length),
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: Math.min(1, props.projects.length),
                        slidesToScroll: Math.min(1, props.projects.length),
                    },
                },
            ],
        };

        return (
            <div className="slider-container">
                <div className="slider">
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charSet="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                    <Slider {...settings}>
                        {props.projects.map((project, i) => (
                            <SliderCard key={i}>
                                <Link to={`/projects/${project.slug}`}>
                                    <div className="title">{project.title}</div>
                                </Link>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={project.thumbnail}
                                        alt={project.slug}
                                    />
                                </a>
                                <div className="description">
                                    {project.description}
                                </div>
                            </SliderCard>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    };

    const loading = () => {
        return <div>loading projects...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};

export default Project;
