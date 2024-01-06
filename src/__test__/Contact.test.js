import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

it("should load contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

it("should load button from contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument;
});

it("should load input fields in contact componet", () => {
  render(<Contact />);
  const input = screen.getAllByRole("textbox");

  expect(input.length).toBe(2);
});
