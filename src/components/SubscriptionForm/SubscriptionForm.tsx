// src/components/SubscriptionForm/SubscriptionForm.tsx
import React, { useState } from "react";
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

export const SubscriptionForm: React.FC = () => {
  const [values, setValues] = useState<SubscriptionFormValues>(initialValues);
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!values.name || !values.email) {
      setMessage("Por favor completa tu nombre y correo electrónico.");
      return;
    }

    setMessage("🎉 ¡Gracias por suscribirte al newsletter de CARAS!");
    setValues(initialValues);
  };

  return (
    <FormCard>
      <Title>Únete gratis</Title>
      <Subtitle>
        Recibe el newsletter con exclusivas, tendencias y coberturas especiales.
      </Subtitle>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={values.name}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={values.email}
            onChange={handleChange}
          />
        </InputGroup>

        <Button type="submit">Recibir newsletter</Button>

        <Helper>
          Al suscribirte aceptas nuestras políticas de privacidad.
        </Helper>
        {message && <Helper>{message}</Helper>}
      </Form>
    </FormCard>
  );
};
