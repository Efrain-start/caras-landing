// src/components/Covers/CoversStyles.ts
import styled from "styled-components";

export const Section = styled.section`
  padding: 2.5rem 1.5rem 3rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const Cover = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  display: block;
`;
