import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import EmptyState from "../index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

describe("<EmptyState />", () => {
  it("should render EmptyState with message", async () => {
    render(
      <ThemeProvider theme={theme}>
        <EmptyState message="No book found, please try again" />
      </ThemeProvider>
    );

    expect(screen.getByText("No book found, please try again"))
      .toBeInTheDocument;
  });
});
