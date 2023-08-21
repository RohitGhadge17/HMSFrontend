import React from "react";
import { render, screen } from "@testing-library/react";
import Jumbo from "./Jumbo"; // Assuming the component file is named Jumbo.js
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";

describe("Jumbo Component", () => {
  it("renders the component correctly", () => {
    render(<Jumbo />);

    // Expect that the Carousel component is rendered

    const carousel = screen.getByTestId("carousel");

    expect(carousel).toBeInTheDocument();

    // Expect that the carousel items are rendered

    const carouselItems = screen.queryAllByRole("img");

    expect(carouselItems).toHaveLength(3); // Assuming you have 3 carousel items
  });

  it("displays carousel images", () => {
    render(<Jumbo />);

    // Expect that the images are rendered with the correct alt text

    const image1 = screen.getByAltText("carousel-image1");

    const image2 = screen.getByAltText("carousel-image2");

    const image3 = screen.getByAltText("carousel-image3");

    expect(image1).toBeInTheDocument();

    expect(image2).toBeInTheDocument();

    expect(image3).toBeInTheDocument();
  });

  // You can write more test cases for checking the carousel behavior,

  // interval, keyboard navigation, etc. based on your project's needs.
});
