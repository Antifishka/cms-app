import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../globalStyles/theme";

export const Container = styled.div`
  max-width: ${theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 14px;
  min-width: 100px;
  border-radius: ${theme.radii.button};
  box-shadow: ${theme.shadows.button};
  cursor: pointer;

  font-weight: ${theme.fontWeights.semiBold};
  font-size: ${theme.fontSizes.s};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  color: ${theme.colors.mainText};
  background-color: ${theme.colors.secondaryText};

  transition: ${theme.transition.main};
    
  &.active {
    color: ${theme.colors.secondaryText};
    background-color: ${theme.colors.background};
  } 

  &:hover:not(.active),
  &:focus-visible:not(.active){
    background-color: ${theme.colors.accent};
  }
`;

export const Main = styled.main`
  padding: 16px 0;
`;