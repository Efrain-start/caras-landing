export function isValidName(name: string): boolean {
  return name.trim().length >= 2;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateSubscriptionForm(name: string, email: string) {
  const errors: { name?: string; email?: string } = {};

  if (!name.trim()) errors.name = "El nombre es obligatorio";
  else if (!isValidName(name)) errors.name = "El nombre no es válido";

  if (!email.trim()) errors.email = "El correo es obligatorio";
  else if (!isValidEmail(email)) errors.email = "El correo no es válido";

  return errors;
}
