import React, { useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

import {
  Page,
  Main,
  Heading,
  H1,
  Lead,
  Grid,
  Card,
  CardTitle,
  Form,
  Field,
  Label,
  Input,
  Textarea,
  Button,
  Helper,
  InfoList,
} from "./ContactStyles";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("✅ ¡Mensaje enviado! Te responderemos pronto.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Page>
      {/* Skip link */}
      <a className="skip-link" href="#contenido-contacto">
        Saltar al contenido
      </a>

      <header role="banner">
        <Header />
      </header>

      <Main id="contenido-contacto" role="main">
        <Heading>
          <H1>Contacto</H1>
          <Lead>
            ¿Tienes dudas sobre el newsletter o quieres colaborar? Envíanos un
            mensaje.
          </Lead>
        </Heading>

        <Grid aria-label="Sección de contacto">
          <Card>
            <CardTitle>Envíanos un mensaje</CardTitle>

            <Form onSubmit={onSubmit} aria-label="Formulario de contacto">
              <Field>
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" type="text" required />
              </Field>

              <Field>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" name="email" type="email" required />
              </Field>

              <Field>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" required />
              </Field>

              <Button type="submit" aria-label="Enviar mensaje de contacto">
                Enviar mensaje
              </Button>

              <Helper>
                Al enviar aceptas nuestras políticas de privacidad.
              </Helper>

              {status && (
                <Helper role="status" aria-live="polite">
                  {status}
                </Helper>
              )}
            </Form>
          </Card>

          <Card>
            <CardTitle>Información</CardTitle>
            <InfoList>
              <li>
                <strong>Correo:</strong> contacto@caras.com
              </li>
              <li>
                <strong>Redes:</strong> Instagram / Facebook / X
              </li>
              <li>
                <strong>Horario:</strong> Lun–Vie, 9:00–18:00
              </li>
            </InfoList>

            <Helper>
              Tip: este panel también ayuda a accesibilidad (contenido claro y
              estructurado).
            </Helper>
          </Card>
        </Grid>
      </Main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </Page>
  );
}
