import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        return (
            <>
                {data.projects.map((project, i) => (
                    <Link to={`/projects/${project.slug}`} key={i}>
                        <p>{project.title}</p>
                    </Link>
                ))}
            </>
        );
    } else {
        return <>{/* <h2>Project Index</h2>{' '} */}</>;
    }
};
export default Project;
