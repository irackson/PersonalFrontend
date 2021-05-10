import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectBySlug } from 'utils/api';

const ProjectArticle = (props) => {
    const slug = props.match.params.slug;
    const [data, setData] = useState(null);

    const getData = async () => {
        const article = await getProjectBySlug(slug);
        setData(article);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (data) {
        if (data.projects) {
            //* avoid index data from catchall being displayed under slug url
            return <Redirect to="/projects"></Redirect>;
        } else {
            return <h4>{JSON.stringify(data)}</h4>;
        }
    } else {
        return <>{/* <h2>ProjectArticle</h2>{' '} */}</>;
    }
};
export default ProjectArticle;
