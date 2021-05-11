import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAbout } from 'utils/api';

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.5rem;
`;

const About = (props) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        setData(await getAbout());
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        return (
            <>
                {data.faq.map((e, ei) => (
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
            </>
        );
    } else {
        return (
            <>
                <h2>About</h2>{' '}
                <Section>
                    <h3>this is the About page</h3>
                </Section>
            </>
        );
    }
};

export default About;
