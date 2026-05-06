import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Button from "./Button";

test("renders button", () => {
  render(<Button />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});