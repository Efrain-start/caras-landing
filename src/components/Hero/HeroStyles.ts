// src/components/Hero/HeroStyles.ts
import styled from "styled-components";

export const HeroSection = styled.section`
  padding: 3rem 3rem 3.5rem;
  background: radial-gradient(circle at top left, #ffe9e9, #fff);
`;

export const HeroInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeroText = styled.div`
  max-width: 560px;
`;

export const Title = styled.h1`
  font-size: 2.7rem;
  line-height: 1.15;
  margin: 0 0 1rem;
`;

export const Highlight = styled.span`
  color: #c41230;
`;

export const Subtitle = styled.p`
  margin: 0 0 1.3rem;
  font-size: 1rem;
  color: #444;

  strong {
    font-weight: 600;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 1.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.98rem;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0.05rem;
    color: #b00020; /* antes #d62828: más contraste */
    font-weight: 700;
  }
`;
