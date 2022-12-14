import { useEffect, useState } from "react";
import { StyledContainer } from "../../atoms/StyledContainer";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import {
  StyledHeader,
  StyledWrapper,
  StyledTitle,
  StyledModeSwitcher,
} from "./styled";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle to={'/'}>Where is the world?</StyledTitle>
          <StyledModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </StyledModeSwitcher>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
