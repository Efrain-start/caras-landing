// src/components/Footer/Footer.tsx
import React from "react";
import {
  FooterWrapper,
  FooterInner,
  SocialLinks,
  SocialLink,
  Copy,
} from "./FooterStyles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <SocialLinks>
          <SocialLink href="https://www.instagram.com/carasmexico/" target="_blank"
            rel="noreferrer">Instagram</SocialLink>
          <SocialLink href="https://www.facebook.com/Revista.Caras/photos/?locale=es_LA" target="_blank"
            rel="noreferrer">Facebook</SocialLink>
          <SocialLink href="https://x.com/CARASmexico" target="_blank"
            rel="noreferrer">X</SocialLink>
        </SocialLinks>

        <Copy>© {new Date().getFullYear()} CARAS. Todos los derechos reservados.</Copy>
        <Copy>Contacto: contacto@caras.com</Copy>
      </FooterInner>
    </FooterWrapper>
  );
};
