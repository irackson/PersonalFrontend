// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { getAbout } from 'utils/api';
import Resume from 'components/Resume';
import { resumeDownloadLink } from 'context/constants';

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
    padding: 1rem;
`;

// const resumeDownloadLink = "https://github.com/irackson/PersonalBackend/raw/main/public/assets/resume/IanRackson-Resume.pdf"

const About = (props) => {
    const loaded = () => {
        return (
            <Div className="about">
                <div className="about__resume-wrapper">
                    <Resume isAbout={true} docLink={resumeDownloadLink}></Resume>
                </div>
                {/* TODO: add skills section */}
                {/* <div>skills</div> */}
                <Faq className="about__faq">
                    {props.about.faq.map((e, ei) => (
                        <div key={ei}>
                            <h2>{e.heading}</h2>
                            {e.qa.map((qa, qai) =>
                                !qa.visible ? null : (
                                    <div key={`${ei}.${qai}`}>
                                        <h3>{qa.question}</h3>
                                        <h4>
                                            {qa.answer
                                                .split('\n')
                                                .map((p, qaip) => (
                                                    <p
                                                        key={`${ei}.${qai}.${qaip}`}
                                                    >
                                                        {p}
                                                    </p>
                                                ))}
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

    // const loading = () => {
    //     return <div>loading about...</div>;
    // };

    return props.isLoaded ? loaded() : <div></div>;
};

export default About;
