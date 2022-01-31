import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  background-color: ${(props) => props.theme.palette.background.primary}80;
  color: ${(props) => props.theme.palette.text.secondary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-family: "Mochiy Pop P One", sans-serif;
  color: ${(props) => props.theme.palette.text.tertiary};
`;

export const Menu = styled.div`
  display: flex;
  gap: 25px;
  font-size: 1.4rem;
`;

export const ItemMenu = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.text.secondary};

  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.palette.text.tertiary};
  }
`;
