import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios"; // Import axios if needed
import { useNavigate } from "react-router-dom";
import AddRole from "./AddRole"; // Replace with your actual path

// Mock axios if needed
jest.mock("axios");

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("AddRole Component", () => {
  it("renders component correctly", async () => {
    render(<AddRole />);

    // Mock axios.get response
    axios.get.mockResolvedValue({
      data: [],
    });

    // Wait for the component to render
    await screen.findByText("Add Role Form");

    // Assert that the form elements are present
    expect(screen.getByText("Add Role Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Select your role:")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("navigates back to /role when 'Back' button is clicked", async () => {
    // Mock useNavigate
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<AddRole />);

    // Wait for the component to render
    await screen.findByText("Add Role Form");

    // Click the "Back" button
    const backButton = screen.getByText("Back");
    fireEvent.click(backButton);

    // Check if the navigation function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith("/role");
  });

  // You can add more test cases for other interactions and edge cases
});