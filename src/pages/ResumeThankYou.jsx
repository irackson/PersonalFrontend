import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`;

const Faq = styled.section`
  max-width: 80ch;
  padding: 1rem;
`;

const ResumeThankYouPage = (props) => {
  const loaded = () => {
    return <Div>Thank you for downloading my resume!</Div>;
  };

  return props.isLoaded ? loaded() : <div></div>;
};

export default ResumeThankYouPage;
