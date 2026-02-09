// src/pages/ContactStyles.ts
import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #fff, #fdecef);
`;

export const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 64px;
`;

export const Heading = styled.div`
  margin: 18px 0 22px;
`;

export const H1 = styled.h1`
  margin: 0 0 8px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.15;
`;

export const Lead = styled.p`
  margin: 0;
  color: #555;
  max-width: 60ch;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 12px 12px;
  font-size: 14px;
  outline: none;

  &:focus-visible {
    border-color: #c8102e;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.18);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #ddd;
  padding: 12px 12px;
  font-size: 14px;
  outline: none;
  min-height: 120px;
  resize: vertical;

  &:focus-visible {
    border-color: #c8102e;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.18);
  }
`;

export const Button = styled.button`
  margin-top: 6px;
  border: none;
  border-radius: 999px;
  padding: 12px 16px;
  font-weight: 800;
  cursor: pointer;
  background: #c8102e;
  color: #fff;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(200, 16, 46, 0.2);
  }
`;

export const Helper = styled.p`
  margin: 10px 0 0;
  color: #666;
  font-size: 12px;
`;

export const InfoList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #444;
  display: grid;
  gap: 8px;
`;
