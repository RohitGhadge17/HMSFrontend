import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home"; // Update the path to match your project structure

test("Home component renders correctly", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  
  // Check if the sub-components (Navbar, Jumbo, CardSection, Footer) are rendered
  const navbar = getByTestId("navbar");
  const jumbo = getByTestId("jumbo");
  const cardSection = getByTestId("card-section");
  const footer = getByTestId("footer");

  expect(navbar).toBeInTheDocument();
  expect(jumbo).toBeInTheDocument();
  expect(cardSection).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
