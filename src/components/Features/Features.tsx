// src/components/Features/Features.tsx
import React from "react";
import {
  Section,
  SectionTitle,
  Grid,
  Card,
  CardTitle,
  CardText,
} from "./FeaturesStyles";

export const Features: React.FC = () => {
  return (
    <Section as="section" aria-labelledby="features-title">
      <SectionTitle as="h2" id="features-title">
        Beneficios de la suscripción
      </SectionTitle>

      <Grid>
        <Card as="article" aria-labelledby="feat-exclusivas">
          <CardTitle as="h3" id="feat-exclusivas">
            Exclusivas
          </CardTitle>
          <CardText>
            Historias y entrevistas con personalidades, antes que nadie.
          </CardText>
        </Card>

        <Card as="article" aria-labelledby="feat-tendencias">
          <CardTitle as="h3" id="feat-tendencias">
            Tendencias
          </CardTitle>
          <CardText>
            Moda, belleza y estilo de vida seleccionados por el equipo de CARAS.
          </CardText>
        </Card>

        <Card as="article" aria-labelledby="feat-agenda">
          <CardTitle as="h3" id="feat-agenda">
            Agenda
          </CardTitle>
          <CardText>
            Lo imperdible de la semana en cultura, eventos y realeza.
          </CardText>
        </Card>
      </Grid>
    </Section>
  );
};
