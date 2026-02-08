import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SubscriptionForm } from "../components/SubscriptionForm/SubscriptionForm";

describe("SubscriptionForm", () => {
  test("renderiza el formulario con sus campos y botón", () => {
    render(<SubscriptionForm />);

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/correo electrónico/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /recibir newsletter/i })
    ).toBeInTheDocument();
  });

  test("muestra mensaje de error si envías vacío", async () => {
    const user = userEvent.setup();
    render(<SubscriptionForm />);

    await user.click(
      screen.getByRole("button", { name: /recibir newsletter/i })
    );

    expect(
      screen.getByText(/por favor completa tu nombre y correo electrónico/i)
    ).toBeInTheDocument();
  });

  test("muestra mensaje de éxito si llenas nombre y correo", async () => {
    const user = userEvent.setup();
    render(<SubscriptionForm />);

    await user.type(screen.getByLabelText(/nombre/i), "Efra");
    await user.type(
      screen.getByLabelText(/correo electrónico/i),
      "efra@test.com"
    );

    await user.click(
      screen.getByRole("button", { name: /recibir newsletter/i })
    );

    expect(
      screen.getByText(/gracias por suscribirte/i)
    ).toBeInTheDocument();
  });
});
