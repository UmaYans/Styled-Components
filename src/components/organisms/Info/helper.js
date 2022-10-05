export const createDataInfo = (props) => {
  const {
    nativeName,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
  } = props

  return {
    oneColumn: [
      { nameList: "Native Name:", valueList: nativeName },
      { nameList: "Population:", valueList: population },
      { nameList: "Region:", valueList: region },
      { nameList: "Sub Region:", valueList: subregion },
      { nameList: "Capital:", valueList: capital },
    ],
    twoColumn: [
      { nameList: "Top Level Domain", valueList: topLevelDomain?.[0] },
      { nameList: "TCurrency", valueList: currencies?.[0].name },
      { nameList: "languages", valueList: languages?.[0].name },
    ],
  };
};
