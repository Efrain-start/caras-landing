// src/components/Covers/Covers.tsx
import React from "react";
import { Section, Grid, Cover } from "./CoversStyles";

import caras1 from "../../assets/img/caras1.jpg";
import caras2 from "../../assets/img/caras2.jpeg";
import caras3 from "../../assets/img/caras3.webp";
import caras4 from "../../assets/img/caras4.webp";
import caras5 from "../../assets/img/caras5.jpeg";

export const Covers: React.FC = () => {
  return (
    <Section>
      <Grid>
        <Cover src={caras1} alt="Portada CARAS 1" />
        <Cover src={caras2} alt="Portada CARAS 2" />
        <Cover src={caras3} alt="Portada CARAS 3" />
        <Cover src={caras4} alt="Portada CARAS 4" />
        <Cover src={caras5} alt="Portada CARAS 5" />
      </Grid>
    </Section>
  );
};
