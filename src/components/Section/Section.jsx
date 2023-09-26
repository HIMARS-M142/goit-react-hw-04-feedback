import styled from 'styled-components';
const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  );
};
