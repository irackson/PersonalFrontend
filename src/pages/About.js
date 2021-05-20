import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAbout } from 'utils/api';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
`;

const Faq = styled.section`
    width: 80ch;
`;

const About = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | About';
    }, []);

    const loaded = () => {
        return (
            <Div>
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
