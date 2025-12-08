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
    <Section>
      <SectionTitle>Beneficios de la suscripción</SectionTitle>

      <Grid>
        <Card>
          <CardTitle>Exclusivas</CardTitle>
          <CardText>
            Historias y entrevistas con personalidades, antes que nadie.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Tendencias</CardTitle>
          <CardText>
            Moda, belleza y estilo de vida seleccionados por el equipo de CARAS.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Agenda</CardTitle>
          <CardText>
            Lo imperdible de la semana en cultura, eventos y realeza.
          </CardText>
        </Card>
      </Grid>
    </Section>
  );
};
