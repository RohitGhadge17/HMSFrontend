import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it("contains Contact Us section", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(getByText("Contact Us")).toBeInTheDocument();
  });

  it("contains Social section with social media links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(getByText("Social")).toBeInTheDocument();
    expect(getByText("Facebook")).toHaveAttribute("href", "https://www.facebook.com");
    expect(getByText("Twitter")).toHaveAttribute("href", "https://www.twitter.com");
    expect(getByText("LinkedIn")).toHaveAttribute("href", "https://www.linkedin.com");
    expect(getByText("Youtube")).toHaveAttribute("href", "https://www.youtube.com");
    expect(getByText("Github")).toHaveAttribute("href", "https://www.github.com");
  });
});
