import {
  StyledWrapper,
  StyledCardImage,
  StyledCardBody,
  StyledCardTitle,
  StyledCardList,
  StyledCardListItem,
} from './styled'

const Card = ({ img, name, info, onClick }) => {
  return (
    <StyledWrapper onClick={onClick}>
      <StyledCardImage src={img} alt={name} />
      <StyledCardBody>
        <StyledCardTitle>{name}</StyledCardTitle>
        <StyledCardList>
          {info.map((el) => (
            <StyledCardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </StyledCardListItem>
          ))}
        </StyledCardList>
      </StyledCardBody>
    </StyledWrapper>
  );
};

export default Card;
