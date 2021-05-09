import { useEffect, useState } from 'react';
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
        return <h4>{JSON.stringify(data)}</h4>;
    } else {
        return (
            <>
                <h2>Blog Index</h2>{' '}
            </>
        );
    }
};
export default Blog;
