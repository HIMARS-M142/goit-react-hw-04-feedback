import styled from 'styled-components';
const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 30px;
  list-style: none;
  align-items: center;
  justify-content: center;
`;
const ButtonList = styled.li``;
const ButtonStyled = styled.button`
  width: 100px;
  height: 50px;
  font-size: large;
  border-radius: 5px;
  cursor: pointer;
  background-color: azure;
`;
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <StyledUl>
      {onLeaveFeedback.map(key => {
        return (
          <ButtonList key={key}>
            <ButtonStyled onClick={() => options(key)} key={key}>
              {key}
            </ButtonStyled>
          </ButtonList>
        );
      })}
    </StyledUl>
  );
};
