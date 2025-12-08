// src/components/Header/HeaderStyles.ts
import styled from "styled-components";

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
