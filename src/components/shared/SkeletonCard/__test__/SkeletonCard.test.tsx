import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SkeletonCard from "../index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

describe("<SkeletonCard />", () => {
  it("should render SkeletonCard", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SkeletonCard />
      </ThemeProvider>
    );

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
