import { IoSearch } from "react-icons/io5";
import { StyledInputContainer, StyledInput } from "./styled";

const Search = ({ search, setSearch }) => {
  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <StyledInputContainer>
      <IoSearch />
      <StyledInput onChange={changeInput} value={search} />
    </StyledInputContainer>
  );
};

export default Search;
