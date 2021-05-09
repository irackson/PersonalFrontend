import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProjects } from 'utils/api';

const Project = (props) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        setData(await getProjects());
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
                <h2>Project Index</h2>{' '}
            </>
        );
    }
};
export default Project;
