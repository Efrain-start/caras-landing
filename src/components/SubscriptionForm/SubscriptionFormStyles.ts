// src/components/SubscriptionForm/SubscriptionFormStyles.ts
import styled from "styled-components";

export const FormCard = styled.aside`
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 2rem 2rem 1.75rem;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  margin: 0 0 0.4rem;
  font-size: 1.35rem;
`;

export const Subtitle = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.93rem;
  color: #444; /* antes #555: un poquito más contraste */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 0.75rem;
  border: 1px solid #d0d0d0; /* un poco más definido */
  padding: 0.75rem 0.9rem;
  font-size: 0.95rem;

  /* Focus accesible para teclado */
  &:focus-visible {
    outline: none;
    border-color: #c41230;
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.25);
  }

  /* Estado de error (cuando aria-invalid=true) */
  &[aria-invalid="true"] {
    border-color: #b00020;
    box-shadow: 0 0 0 3px rgba(176, 0, 32, 0.2);
  }
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  border-radius: 999px;
  border: none;
  padding: 0.8rem 1rem;
  background: #c41230;
  color: #fff;
  font-weight: 600;
  font-size: 0.98rem;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(196, 18, 48, 0.35);
  }

  /* Focus accesible */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(196, 18, 48, 0.35);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Helper = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.8rem;
  color: #555; /* antes #777: mejor contraste */
`;
