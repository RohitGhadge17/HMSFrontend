import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  };
});

describe("NavBar Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  it("contains Home icon and links to About, Services, and Login", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    expect(getByTestId("home-icon")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Services")).toBeInTheDocument();
    expect(getByText("SignIn")).toBeInTheDocument();
  });

  it("navigates to home page when Home icon is clicked", () => {
    const mockNavigate = jest.fn(); // Create a mock function for navigate
    useNavigate.mockReturnValue(mockNavigate); // Set the mock function as the return value of useNavigate

    const { getByTestId } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeIcon = getByTestId("home-icon");
    fireEvent.click(homeIcon);

    expect(mockNavigate).toHaveBeenCalledWith("/"); // Verify the mockNavigate function is called with "/"
  });
});
