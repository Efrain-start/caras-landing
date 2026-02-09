// src/components/Covers/Covers.tsx
import React from "react";
import { Section, Grid, Cover, SectionTitle } from "./CoversStyles";

import caras1 from "../../assets/img/caras1.jpg";
import caras2 from "../../assets/img/caras2.jpeg";
import caras3 from "../../assets/img/caras3.webp";
import caras4 from "../../assets/img/caras4.webp";
import caras5 from "../../assets/img/caras5.jpeg";

export const Covers: React.FC = () => {
  return (
    <Section as="section" aria-labelledby="covers-title">
      <SectionTitle as="h2" id="covers-title">
        Portadas destacadas
      </SectionTitle>

      <Grid as="ul" aria-label="Galería de portadas">
        <li>
          <Cover
            src={caras1}
            alt="Portada de CARAS: edición destacada 1"
          />
        </li>

        <li>
          <Cover
            src={caras2}
            alt="Portada de CARAS: edición destacada 2"
          />
        </li>

        <li>
          <Cover
            src={caras3}
            alt="Portada de CARAS: edición destacada 3"
          />
        </li>

        <li>
          <Cover
            src={caras4}
            alt="Portada de CARAS: edición destacada 4"
          />
        </li>

        <li>
          <Cover
            src={caras5}
            alt="Portada de CARAS: edición destacada 5"
          />
        </li>
      </Grid>
    </Section>
  );
};
