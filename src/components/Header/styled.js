import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const StyledWrapper = styled.div`
  display flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const StyledTitle = styled(Link)`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const StyledModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export { StyledHeader, StyledWrapper, StyledTitle, StyledModeSwitcher };
