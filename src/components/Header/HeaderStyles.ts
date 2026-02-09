// src/components/Header/HeaderStyles.ts
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding: 1.25rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #c41230;
  text-decoration: none;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.35);
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }
`;

export const NavButton = styled(NavLink)`
  font-weight: 800;
  padding: 8px 18px;
  border-radius: 999px;
  background: #c41230;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: #a60d26;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.35);
  }

  &.active {
    background: #a60d26;
  }
`;

export const IconsWrapper = styled.nav`
  display: flex;
  gap: 1.2rem;
`;

export const Icon = styled.a`
  font-size: 0.95rem;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #c41230;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.35);
    border-radius: 4px;
  }
`;
