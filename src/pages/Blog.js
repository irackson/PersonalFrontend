import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const Blog = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Blog';
    }, []);

    const loaded = () => {
        return (
            <>
                {props.blogs.map((blog, i) => (
                    <Link to={`/blog/${blog.slug}`} key={i}>
                        <p>{blog.title}</p>
                    </Link>
                ))}
            </>
        );
    };

    const loading = () => {
        return <div>loading blogs...</div>;
    };

    return props.isLoaded ? loaded() : loading();
};
export default Blog;
