import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = (props) => {
    const loaded = () => {
        return (
            <>
                {props.projects.map((project, i) => (
                    <Link to={`/projects/${project.slug}`} key={i}>
                        <p>{project.title}</p>
                    </Link>
                ))}
            </>
        );
    };

    const loading = () => {
        return <div>loading projects...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default Project;
