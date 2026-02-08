import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header/Header";

describe("Header", () => {
  test("renderiza el texto del logo", () => {
    render(<Header />);
    expect(screen.getByText("CARAS")).toBeInTheDocument();
  });

  test("renderiza los enlaces a redes sociales", () => {
    render(<Header />);

    // Tus <a> tienen aria-label, perfecto para testing
    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^x$/i })).toBeInTheDocument();
  });
});
