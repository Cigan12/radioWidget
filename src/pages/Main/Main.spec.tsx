import React from "react";
import { render, screen } from "@testing-library/react";
import { MainPage } from "./Main.page";

test("renders learn react link", () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
