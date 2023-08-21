import React from "react";
import { render } from "@testing-library/react";
import CardSection from "./CardSection"; // Update the path to match your project structure

test("CardSection component renders correctly", () => {
  const { container, getByText } = render(<CardSection />);
  
  // Check if the component is rendered
  expect(container).toBeInTheDocument();

  // Check if the headings and descriptions are rendered correctly
  expect(getByText("Medicines")).toBeInTheDocument();
  expect(getByText("Available at your door step")).toBeInTheDocument();

  expect(getByText("Find Doctors Near You")).toBeInTheDocument();
  expect(getByText("Confirmed appointments")).toBeInTheDocument();

  expect(getByText("Lab Test")).toBeInTheDocument();
  expect(getByText("Sample test available")).toBeInTheDocument();

  expect(getByText("Surgeries Available")).toBeInTheDocument();
  expect(getByText("Trusted and safe surgery center")).toBeInTheDocument();

  // Check if images are rendered
  const images = container.querySelectorAll("img");
  expect(images).toHaveLength(4); // Make sure all four images are present

  // You can also check image attributes if needed
  images.forEach((image) => {
    expect(image).toHaveAttribute("alt");
    expect(image).toHaveAttribute("src");
    expect(image).toHaveStyle("height: 150px");
    expect(image).toHaveStyle("width: 300px");
    expect(image).toHaveStyle("borderRadius: 15px");
  });
});
