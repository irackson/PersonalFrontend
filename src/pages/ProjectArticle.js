import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'components/Markdown';
const ProjectArticle = (props) => {
    const loaded = () => {
        const project = props.projects.filter(
            (e) => e.slug === props.match.params.slug
        )[0];

        return typeof project === 'undefined' ? (
            <Redirect to="/" />
        ) : (
            <div>
                <h1>{project.title}</h1>
                <h2>{project.description}</h2>
                <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    link to code repo
                </a>
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    link to live site
                </a>
                <img src={project.thumbnail} alt={project.slug}></img>
                <h5>{project.createdAt}</h5>
                <h5>{project.updatedAt}</h5>
                <Markdown sanitizedHtml={project.sanitizedHtml}></Markdown>
            </div>
        );
    };

    const loading = () => {
        return <div>loading project...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default ProjectArticle;
