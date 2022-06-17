import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

describe("Home", () => {
  it("renders Layout", () => {
    render(
      <ThemeProvider theme={theme}>
        <Layout>
          <div>Hello</div>
        </Layout>
      </ThemeProvider>
    );

    const inputBar = screen.getByTestId("logo-icon");
    const children = screen.getByText("Hello");

    expect(inputBar).toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});
