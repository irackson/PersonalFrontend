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

                                    <i className="fas fa-file-pdf"></i>
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
