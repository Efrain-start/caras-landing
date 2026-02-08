import {
  isValidEmail,
  isValidName,
  validateSubscriptionForm,
} from "./validation";

describe("Validation utils", () => {
  test("validación de nombre", () => {
    expect(isValidName("E")).toBe(false);
    expect(isValidName("Efra")).toBe(true);
  });

  test("validación de email", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("correo@")).toBe(false);
    expect(isValidEmail("correo@test.com")).toBe(true);
  });

  test("errores cuando los campos están vacíos", () => {
    const errors = validateSubscriptionForm("", "");
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
  });

  test("sin errores cuando los datos son válidos", () => {
    const errors = validateSubscriptionForm("Efra", "efra@test.com");
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
