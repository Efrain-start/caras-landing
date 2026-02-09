// src/components/Covers/CoversStyles.ts
import styled from "styled-components";

export const Section = styled.section`
  padding: 2.5rem 1.5rem 3rem;
`;

export const SectionTitle = styled.h2`
  max-width: 1100px;
  margin: 0 auto 1rem;
  font-size: 1.35rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  /* si lo usas como ul */
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  /* para que <li> no meta estilos raros */
  li {
    margin: 0;
    padding: 0;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
  display: block;
`;
