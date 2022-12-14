import styled from "styled-components";

const StyledWrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const StyledCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const StyledCardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const StyledCardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const StyledCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const StyledCardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & > b {
    font-weight: var(--fw-bold);
  }
`;

export {
  StyledWrapper,
  StyledCardImage,
  StyledCardBody,
  StyledCardTitle,
  StyledCardList,
  StyledCardListItem,
};
