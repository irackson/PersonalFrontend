import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { getBlogBySlug } from 'utils/api';

const BlogArticle = (props) => {
    const slug = props.match.params.slug;
    const [data, setData] = useState(null);

    const getData = async () => {
        const article = await getBlogBySlug(slug);
        setData(article);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        if (data.blogs) {
            //* avoid index data from catchall being displayed under slug url
            return <Redirect to="/blog"></Redirect>;
        } else {
            return <h4>{JSON.stringify(data)}</h4>;
        }
    } else {
        return (
            <>
                <h2>BlogArticle</h2>{' '}
            </>
        );
    }
};
export default BlogArticle;
