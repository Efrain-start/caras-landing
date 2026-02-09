// src/components/Hero/Hero.tsx
import React from "react";
import {
  HeroSection,
  HeroInner,
  HeroText,
  Title,
  Highlight,
  Subtitle,
  List,
  Item,
} from "./HeroStyles";
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm";

export const Hero: React.FC = () => {
  return (
    <HeroSection as="section" aria-labelledby="hero-title">
      <HeroInner>
        <HeroText>
          <Title as="h1" id="hero-title">
            Suscríbete al newsletter de <Highlight>CARAS</Highlight>
          </Title>

          <Subtitle>
            Exclusivas, moda, realeza y cultura pop. Un resumen exclusivo{" "}
            <strong>directo a tu correo</strong>, varias veces por semana.
          </Subtitle>

          <List as="ul">
            <Item as="li">Lo más relevante del día</Item>
            <Item as="li">Entrevistas y coberturas especiales</Item>
            <Item as="li">Tendencias, lifestyle y eventos</Item>
          </List>
        </HeroText>

        <SubscriptionForm />
      </HeroInner>
    </HeroSection>
  );
};
