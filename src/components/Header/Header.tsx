// src/components/Header/Header.tsx
import React from "react";
import { HeaderWrapper, Logo, IconsWrapper, Icon } from "./HeaderStyles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>CARAS</Logo>

      <IconsWrapper>
        <Icon href="https://www.facebook.com/Revista.Caras/photos/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          f
        </Icon>
        <Icon href="https://www.instagram.com/carasmexico/" target="_blank"
  rel="noopener noreferrer" aria-label="Instagram">
          <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7ZM17 4C18.66 4 20 5.34 20 7V17C20 18.66 18.66 20 17 20H7C5.34 20 4 18.66 4 17V7C4 5.34 5.34 4 7 4H17ZM17.5 6C17.22 6 17 6.22 17 6.5C17 6.78 17.22 7 17.5 7C17.78 7 18 6.78 18 6.5C18 6.22 17.78 6 17.5 6ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z"/>
  </svg>
        </Icon>
        <Icon href="https://x.com/CARASmexico" target="_blank"
  rel="noopener noreferrer" aria-label="X">
          X
        </Icon>
      </IconsWrapper>
    </HeaderWrapper>
  );
};
