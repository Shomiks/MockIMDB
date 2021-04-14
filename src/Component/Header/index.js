import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "./UserInterface";
import { StyledAppBar, StyledToolbar, StyledLink, Image } from "./headerStyles";

const Header = () => {
  const { isLoading } = useAuth0();

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <StyledLink to="/">
          <Image src="https://www.thewrap.com/wp-content/uploads/2016/09/IMDb-418x270.png" />
        </StyledLink>
        {!isLoading && <AuthNav />}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
