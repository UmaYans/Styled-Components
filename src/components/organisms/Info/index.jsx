import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "../../../config";
import { createDataInfo } from "./helper";
import {
  StyledWrapper,
  StyledInfoImage,
  StyledInfoTitle,
  StyledListGroup,
  StyledList,
  StyledListItem,
  StyledMeta,
  StyledTagGroup,
  StyledTag,
} from "./styled";

export const Info = (props) => {
  const infoByCountry = createDataInfo(props);
  const { oneColumn, twoColumn } = infoByCountry;
  const { name, flag, borders = [], navigate } = props;

  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  const renderBordersMeta = () => {
    if (!borders.length) {
      return <span>There is no border countries</span>;
    }
    return (
      <StyledMeta>
        <b>Border Countries</b>
        <StyledTagGroup>
          {neighbors.map((b) => (
            <StyledTag key={b} onClick={() => navigate(`/country/${b}`)}>
              {b}
            </StyledTag>
          ))}
        </StyledTagGroup>
      </StyledMeta>
    );
  };

  const renderInfoByCountry = () => {
    return (
      <StyledListGroup>
        <StyledList>
          {oneColumn.map((country) => (
            <StyledListItem key={country.nameList}>
              <b>{country.nameList}</b> {country.valueList}
            </StyledListItem>
          ))}
        </StyledList>
        <StyledList>
          {twoColumn.map((country) => (
            <StyledListItem key={country.nameList}>
              <b>{country.nameList}</b> {country.valueList}
            </StyledListItem>
          ))}
        </StyledList>
      </StyledListGroup>
    );
  };

  return (
    <StyledWrapper>
      <StyledInfoImage src={flag} alt={name} />
      <div>
        <StyledInfoTitle>{name}</StyledInfoTitle>
        {renderInfoByCountry()}
        {renderBordersMeta()}
      </div>
    </StyledWrapper>
  );
};
