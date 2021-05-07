import ThemeApplicator from 'components/user/ThemeApplicator';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 1.5rem;
`;

export default function Home(props) {
    return (
        <>
            <h2>Homepage</h2>{' '}
            <Section>
                <h3>this is the homepage</h3>
            </Section>
            <footer>
                <h4>Pick your Theme</h4>

                <ThemeApplicator></ThemeApplicator>
                <nav>
                    <Link to="/settings">
                        <button>Create / Manage your own Theme</button>
                    </Link>
                </nav>
            </footer>
        </>
    );
}
