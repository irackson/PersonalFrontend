import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHome } from 'utils/api';

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.5rem;
`;

const Home = (props) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        setData(await getHome());
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        return <h4>{JSON.stringify(data)}</h4>;
    } else {
        return (
            <>
                <h2>Homepage</h2>{' '}
                <Section>
                    <h3>this is the homepage</h3>
                </Section>
            </>
        );
    }
};

export default Home;
