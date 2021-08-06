// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { getAbout } from 'utils/api';
import Resume from 'components/Resume';

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

const docLink =
    'https://docs.google.com/document/d/1tz5miRPmyE0gqlwPsJqIqnnH8Y8QKbLkO_1dt4NHyAM/export?format=pdf';
// const docLink = "https://github.com/irackson/PersonalBackend/raw/main/public/assets/resume/IanRackson-Resume.pdf"

const About = (props) => {
    const loaded = () => {
        return (
            <Div className="about">
                <Resume docLink={docLink}></Resume>
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
