import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* align-items: center; */
    /* text-align: left; */
    min-width: 30ch;
    /* flex-wrap: wrap; */
    /* row-gap: 1.5rem; */
    ul {
        list-style: none;
        li {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
`;

const Home = (props) => {
    useEffect(() => {
        document.title = 'Ian Rackson | Landing';
    }, []);
    const loaded = () => {
        return (
            <Section>
                <ul>
                    <li>{props.contact.name}</li>
                    <li>{props.contact.title}</li>
                    <li>{props.contact.phone}</li>
                    <li>
                        {Object.keys(props.contact.email).map((email, i) => (
                            <p key={i}>{props.contact.email[`${email}`]}</p>
                        ))}
                    </li>
                    <li>
                        {Object.keys(props.contact.address).map(
                            (address, i) => (
                                <p key={i}>
                                    {props.contact.address[`${address}`]}
                                </p>
                            )
                        )}
                    </li>
                    <li>
                        {Object.keys(props.contact.social).map((social, i) => (
                            <p key={i}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={props.contact.social[`${social}`]}
                                    key={i}
                                >
                                    {social}
                                </a>
                            </p>
                        ))}
                    </li>
                    <li>
                        Featured Project:
                        {props.featuredProject ? (
                            <Link
                                to={`/projects/${props.featuredProject.slug}`}
                            >
                                <p>{props.featuredProject.title}</p>
                            </Link>
                        ) : null}
                    </li>
                    <li>
                        Featured Blog:
                        {props.featuredBlog ? (
                            <Link to={`/blog/${props.featuredBlog.slug}`}>
                                <p>{props.featuredBlog.title}</p>
                            </Link>
                        ) : null}
                    </li>
                </ul>
            </Section>
        );
    };

    const loading = () => {
        return (
            <Section>
                <ul>
                    <li>Ian Rackson</li>
                    <li>Full-Stack Web Dev</li>
                    <li>(917) 684-8443</li>
                    <li>
                        <p>ian@rackson.com</p>
                        <p>nasirus@protonmail.com</p>
                        <p>inasusr@gmail.com</p>
                    </li>
                    <li>
                        <p>2000 Broadway</p>
                        <p>22c</p>
                        <p>10023</p>
                        <p>New York</p>
                        <p>NY</p>
                    </li>
                    <li>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://twitter.com/IanRacksonFSWD/"
                            >
                                twitter
                            </a>
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://ga-students.slack.com/team/U01GN8NP1C5"
                            >
                                slack
                            </a>
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/irackson/"
                            >
                                github
                            </a>
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/ianrackson/"
                            >
                                linkedin
                            </a>
                        </p>
                        <p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.youtube.com/channel/UChtYvxQVNWgsySzDJRcv6SQ"
                            >
                                youtube
                            </a>
                        </p>
                    </li>
                </ul>
            </Section>
        );
    };

    return props.isLoaded ? loaded() : loading();
};

export default Home;
