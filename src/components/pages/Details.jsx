import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../../config";
import { StyledButton } from "../atoms/StyledButton";
import { Info } from "../organisms/Info";

const Details = () => {
  const [country, setCountry] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const navigate = useNavigate();

  return (
    <>
      <StyledButton onClick={() => navigate(-1, { replace: true })}>
        <IoArrowBack /> Back
      </StyledButton>
      {country && <Info navigate={navigate} {...country} />}
    </>
  );
};

export default Details;
