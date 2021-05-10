import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogs } from 'utils/api';
const Blog = (props) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        setData(await getBlogs());
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        return (
            <>
                {data.blogs.map((blog, i) => (
                    <Link to={`/blog/${blog.slug}`} key={i}>
                        <p>{blog.title}</p>
                    </Link>
                ))}
            </>
        );
    } else {
        return <>{/* <h2>Loading Blog Index</h2>{' '} */}</>;
    }
};
export default Blog;
