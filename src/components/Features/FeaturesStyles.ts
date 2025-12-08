// src/components/Features/FeaturesStyles.ts
import styled from "styled-components";

export const Section = styled.section`
  padding: 3rem 3rem 3.5rem;
  background: #fff;
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin: 0 0 1.5rem;
  max-width: 1120px;
  margin-inline: auto;
`;

export const Grid = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.article`
  background: #ffffff;
  border-radius: 0.9rem;
  padding: 1.4rem 1.3rem;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
`;

export const CardText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #555;
`;
