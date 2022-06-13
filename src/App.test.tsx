import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
