import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import RolePage from "./RolePage";
import { MemoryRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/extend-expect";

// Mocking axios for API calls
jest.mock("axios");

describe("RolePage Component", () => {
  it("calls deleteRole function when Delete button is clicked", async () => {
    const mockRoles = [
      { roleId: 1, roleName: "Role 1" },
      { roleId: 2, roleName: "Role 2" },
    ];

    axios.get.mockResolvedValue({ data: mockRoles });
    axios.delete.mockResolvedValue({});

    render(
      <MemoryRouter>
        <RolePage />
      </MemoryRouter>
    );

    // Wait for data to be loaded
    await waitFor(() => {
      expect(screen.getByText("Role 1")).toBeInTheDocument();
    });

    // Find the Delete button in the first row (assuming it's in the first row)
    const deleteButton = screen.getAllByText("Delete")[0];

    // Click the Delete button
    fireEvent.click(deleteButton);

    // Wait for the delete function to be called and roles to be reloaded
    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith(
        "https://localhost:7264/api/roles/1"
      );
      expect(axios.get).toHaveBeenCalledTimes(2); // Once for initial load, once after delete
    });
  });

  // You can write more test cases to cover other scenarios and interactions.
});
