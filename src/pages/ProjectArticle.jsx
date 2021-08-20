import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Markdown from 'components/Markdown';
import { useEffect } from 'react';
const ProjectArticle = (props) => {
    const setDocumentTitle = () => {
        const docTitle = props.isLoaded
            ? props.projects.filter(
                  (e) => e.slug === props.match.params.slug
              )[0].title
            : 'loading project post...';
        document.title = docTitle;
    };

    useEffect(() => {
        setDocumentTitle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isLoaded]);

    const loaded = () => {
        const project = props.projects.filter(
            (e) => e.slug === props.match.params.slug
        )[0];

        return typeof project === 'undefined' ? (
            <Redirect to="/" />
        ) : (
            <div className="article">
                <article className="article__container">
                    <div className="article__heading">
                        <h1 className="article__title">{project.title}</h1>
                        <h2 className="article__description">
                            {project.description}
                        </h2>
                    </div>
                    <div className="article__dates">
                        <h4>{moment(project.createdAt).format('LL')}</h4>
                    </div>
                    {/* <h5>{project.updatedAt}</h5> */}
                    <div className="article__links">
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.slug}
                            ></img>
                        </a>
                        <p>click preview image for live site, </p>

                        <p>
                            <span>or view the </span>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                code on GitHub
                            </a>
                        </p>
                    </div>

                    <div className="article__markdown-container">
                        <Markdown
                            sanitizedHtml={project.sanitizedHtml}
                        ></Markdown>
                    </div>
                </article>
            </div>
        );
    };

    const loading = () => {
        return <div>loading project...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default ProjectArticle;
