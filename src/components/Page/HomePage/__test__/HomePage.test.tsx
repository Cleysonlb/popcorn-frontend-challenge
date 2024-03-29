import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

describe("Home", () => {
  it("renders HomePage", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );

    const inputBar = screen.getByTestId("search-bar-input");

    expect(inputBar).toBeInTheDocument();
  });
});
