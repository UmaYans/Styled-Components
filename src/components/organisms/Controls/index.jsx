import { useEffect, useState } from "react";
import { CustomSelect } from "../../molecules/CustomSelect";
import Search from "../../molecules/Search";
import { StyledWrapper } from "./styled";


const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];



const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    onSearch(search, region?.value)
    
    //eslint-disable-next-line
  }, [search, region]);

  return (
    <StyledWrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </StyledWrapper>
  );
};

export default Controls;
