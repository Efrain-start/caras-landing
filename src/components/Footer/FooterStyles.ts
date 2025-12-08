// src/components/Footer/FooterStyles.ts
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 2rem 3rem;
  background: #111;
  color: #fff;
`;

export const FooterInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 0.95rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copy = styled.p`
  margin: 0.25rem 0;
  font-size: 0.82rem;
  color: #ddd;
`;
