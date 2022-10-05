import { StyledContainer } from "../../atoms/StyledContainer";
import { StyledWrapper } from "./styled";


const Main = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
};

export default Main;
