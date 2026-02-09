// src/components/Header/HeaderStyles.ts
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding: 1.25rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #c41230;
`;

export const IconsWrapper = styled.div`
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
`;

export const NavButton = styled(Link)`
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
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
`;





