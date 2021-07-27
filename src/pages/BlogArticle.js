import { Redirect } from 'react-router-dom';
import moment from 'moment';
import Markdown from 'components/Markdown';
import { useEffect, useState } from 'react';

const BlogArticle = (props) => {
    const setDocumentTitle = () => {
        const docTitle = props.isLoaded
            ? props.blogs.filter((e) => e.slug === props.match.params.slug)[0]
                  .title
            : 'loading blog post...';
        document.title = docTitle;
    };

    useEffect(() => {
        setDocumentTitle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isLoaded]);

    const loaded = () => {
        const blog = props.blogs.filter(
            (e) => e.slug === props.match.params.slug
        )[0];

        return typeof blog === 'undefined' ? (
            <Redirect to="/" />
        ) : (
            <div className="article">
                <article className="article__container">
                    <div className="article__heading">
                        <h1 className="article__title">{blog.title}</h1>
                        <h2 className="article__description">
                            {blog.description}
                        </h2>
                    </div>
                    <div className="article__dates">
                        <h4>{moment(blog.createdAt).format('LL')}</h4>
                    </div>
                    {/* <h5>{blog.updatedAt}</h5> */}
                    <div className="article__links">
                        <img src={blog.thumbnail} alt={blog.slug}></img>
                    </div>

                    <div className="article__markdown-container">
                        <Markdown sanitizedHtml={blog.sanitizedHtml}></Markdown>
                    </div>
                </article>
            </div>
        );
    };

    const loading = () => {
        return <div>loading blog...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default BlogArticle;
