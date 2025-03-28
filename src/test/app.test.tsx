import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("should display Vite logo", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
  });
});
