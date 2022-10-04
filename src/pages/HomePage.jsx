import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ALL_COUNTRIES } from "../config";
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch();
    //eslint-disable-next-line
  }, [countries]);

  const createCountryInfo = (country) => {
    return {
      img: country.flags.png,
      name: country.name,
      info: [
        {
          title: "Population",
          description: country.population.toLocaleString(),
        },
        { title: "Region", description: country.regon },
        { title: "Capital", description: country.capital },
      ],
    };
  };

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((country) => (
          <Card
            key={country.name}
            onClick={() => navigate(`/country/${country.name}`)}
            {...createCountryInfo(country)}
          />
        ))}
      </List>
    </>
  );
};

export default HomePage;
