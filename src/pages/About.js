// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { getAbout } from 'utils/api';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
`;

const Faq = styled.section`
    max-width: 80ch;
    padding: 1em;
`;

const About = (props) => {
    const loaded = () => {
        return (
            <Div className="about">
                <div className="about__resume-container">
                    <div id="container">
                        {/* https://codepen.io/mattsrinc/pen/OXwKkv */}
                        <div id="circle">
                            <a href="https://github.com/irackson/PersonalBackend/raw/main/public/assets/resume/IanRackson-Resume.pdf">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    width="300px"
                                    height="300px"
                                    viewBox="0 0 300 300"
                                    enableBackground="new 0 0 300 300"
                                >
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                        />
                                    </defs>

                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="file-pdf"
                                        className="svg-inline--fa fa-file-pdf fa-w-12"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"
                                        ></path>
                                    </svg>
                                    <circle
                                        cx="150"
                                        cy="100"
                                        r="75"
                                        fill="none"
                                    />
                                    <g>
                                        <use
                                            xlinkHref="#circlePath"
                                            fill="none"
                                        />
                                        <text fill="goldenrod">
                                            <textPath xlinkHref="#circlePath">
                                                RESUME
                                            </textPath>
                                        </text>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* TODO: add skills section */}
                {/* <div>skills</div> */}
                <Faq>
                    {props.about.faq.map((e, ei) => (
                        <div key={ei}>
                            <h2>{e.heading}</h2>
                            {e.qa.map((qa, qai) =>
                                !qa.visible ? null : (
                                    <div key={`${ei}.${qai}`}>
                                        <h3>{qa.question}</h3>
                                        <h4 style={{ whiteSpace: 'pre-line' }}>
                                            {qa.answer}
                                        </h4>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </Faq>
            </Div>
        );
    };

    const loading = () => {
        return <div>loading about...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};

export default About;
