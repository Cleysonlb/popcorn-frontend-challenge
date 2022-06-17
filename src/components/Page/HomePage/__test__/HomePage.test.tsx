import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const text = screen.getByText("Home Page");

    expect(text).toBeInTheDocument();
  });
});
