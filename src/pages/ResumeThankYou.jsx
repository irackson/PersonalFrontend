import styled from 'styled-components';
import { useEffect } from 'react';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  padding-top: 40px;
`;

const ResumeThankYouPage = (props) => {
  useEffect(() => {
    document.title = 'Ian Rackson | Resume';
  }, []);

  const loaded = () => {
    return <Div>Thank you for downloading my resume!</Div>;
  };

  return props.isLoaded ? loaded() : <div></div>;
};

export default ResumeThankYouPage;
