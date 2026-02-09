// src/components/SubscriptionForm/SubscriptionForm.tsx
import React, { useMemo, useState } from "react";
import {
  FormCard,
  Form,
  Title,
  Subtitle,
  InputGroup,
  Label,
  Input,
  Button,
  Helper,
} from "./SubscriptionFormStyles";

interface SubscriptionFormValues {
  name: string;
  email: string;
}

const initialValues: SubscriptionFormValues = {
  name: "",
  email: "",
};

type Status = "idle" | "error" | "success";

export const SubscriptionForm: React.FC = () => {
  const [values, setValues] = useState<SubscriptionFormValues>(initialValues);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const ids = useMemo(
    () => ({
      title: "subscription-title",
      subtitle: "subscription-subtitle",
      helper: "subscription-helper",
      message: "subscription-message",
      name: "name",
      email: "email",
    }),
    []
  );

  const nameInvalid = status === "error" && !values.name.trim();
  const emailInvalid = status === "error" && !values.email.trim();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // si el usuario corrige, limpiamos feedback
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!values.name.trim() || !values.email.trim()) {
      setStatus("error");
      setMessage("Por favor completa tu nombre y correo electrónico.");
      return;
    }

    setStatus("success");
    setMessage("🎉 ¡Gracias por suscribirte al newsletter de CARAS!");
    setValues(initialValues);
  };

  return (
    <FormCard aria-labelledby={ids.title} aria-describedby={ids.subtitle}>
      {/* Importante: esto debe ser h2 (el h1 ya está en el Hero) */}
      <Title as="h2" id={ids.title}>
        Únete gratis
      </Title>

      <Subtitle id={ids.subtitle}>
        Recibe el newsletter con exclusivas, tendencias y coberturas especiales.
      </Subtitle>

      <Form onSubmit={handleSubmit} noValidate aria-describedby={ids.helper}>
        <InputGroup>
          <Label htmlFor={ids.name}>Nombre</Label>
          <Input
            id={ids.name}
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={nameInvalid}
            aria-describedby={message ? ids.message : undefined}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor={ids.email}>Correo electrónico</Label>
          <Input
            id={ids.email}
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
            aria-invalid={emailInvalid}
            aria-describedby={message ? ids.message : undefined}
          />
        </InputGroup>

        <Button type="submit">Recibir newsletter</Button>

        <Helper id={ids.helper}>
          Al suscribirte aceptas nuestras políticas de privacidad.
        </Helper>

        {/* Mensaje accesible para lectores de pantalla */}
        {message && (
          <Helper
            id={ids.message}
            role={status === "error" ? "alert" : "status"}
            aria-live={status === "error" ? "assertive" : "polite"}
          >
            {message}
          </Helper>
        )}
      </Form>
    </FormCard>
  );
};
