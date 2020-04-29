import React from "react";
import { Help } from "./Help";
import { render, screen } from "@testing-library/react";

test("Should show help items", () => {
  render(<Help />);

  expect(screen.queryByText(/Finding/)).toBeInTheDocument();
  expect(screen.queryByText(/Not Found/)).toBe(null);
});
