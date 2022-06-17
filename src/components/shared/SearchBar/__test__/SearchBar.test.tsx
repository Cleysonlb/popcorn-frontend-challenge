import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import SearchBar from "../index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

const onChange = jest.fn();

describe("<SearchBar />", () => {
  it("should render SearchBar", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar searchTitle={"Harry Potter"} handleChange={onChange} />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText("Search books...")).toHaveValue(
      "Harry Potter"
    );
  });

  it("should call onChange", async () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar searchTitle={"Harry Potter"} handleChange={onChange} />
      </ThemeProvider>
    );

    const searchBarInput = screen.getByPlaceholderText("Search books...");
    await userEvent.type(searchBarInput, "Harry Potter");

    expect(screen.getByPlaceholderText("Search books...")).toHaveValue(
      "Harry Potter"
    );
  });
});
