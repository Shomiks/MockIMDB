import styled from "styled-components";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  margin-bottom: 60px;
  background: #00bfff !important;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  cursor: pointer;
  width: 100%;
`;

const StyledLink = styled(Link)`
  height: 50px;
  width: 75px;
  display: flex;
  @media (max-width: 400px) {
    width: 60px;
  }
`;

export { Image, StyledAppBar, StyledLink, StyledToolbar };
