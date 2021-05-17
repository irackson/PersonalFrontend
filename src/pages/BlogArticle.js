import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Markdown from 'components/Markdown';
const BlogArticle = (props) => {
    const loaded = () => {
        const blog = props.blogs.filter(
            (e) => e.slug === props.match.params.slug
        )[0];

        return typeof blog === 'undefined' ? (
            <Redirect to="/" />
        ) : (
            <div>
                <h1>{blog.title}</h1>
                <h2>{blog.description}</h2>
                <img src={blog.thumbnail} alt={blog.slug}></img>
                <h5>{blog.createdAt}</h5>
                <h5>{blog.updatedAt}</h5>
                <Markdown sanitizedHtml={blog.sanitizedHtml}></Markdown>
            </div>
        );
    };

    const loading = () => {
        return <div>loading blog...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default BlogArticle;
