import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import EditHospital from "./EditHospital";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Mock axios
jest.mock("axios");

describe("EditHospital Component", () => {
  it("fetches data and renders the form", async () => {
    const mockHospitalId = "123";
    const mockData = {
      hospitalName: "Test Hospital",
      location: "Test Locality",
    };
    const mockResponse = { data: mockData };
    axios.get.mockResolvedValue(mockResponse);

    render(
      <MemoryRouter initialEntries={[`/edit/${mockHospitalId}`]}>
        <Routes>
          <Route path="/edit/:hospitalId" element={<EditHospital />} />
        </Routes>
      </MemoryRouter>
    );

    expect(axios.get).toHaveBeenCalledWith(
      `https://localhost:7264/api/Hospital/${mockHospitalId}`
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Name of Hospital :")).toHaveValue(
        mockData.hospitalName
      );
      expect(screen.getByLabelText("Locality of Hospital :")).toHaveValue(
        mockData.location
      );
    });
  });

  it("submits the form and updates data", async () => {
    const mockHospitalId = "123";
    const mockData = {
      hospitalName: "Test Hospital",
      location: "Test Locality",
    };
    axios.get.mockResolvedValue({ data: mockData });
    axios.put.mockResolvedValue({});

    render(
      <MemoryRouter initialEntries={[`/edit/${mockHospitalId}`]}>
        <Routes>
          <Route path="/edit/:hospitalId" element={<EditHospital />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Name of Hospital :")).toHaveValue(
        mockData.hospitalName
      );
      expect(screen.getByLabelText("Locality of Hospital :")).toHaveValue(
        mockData.location
      );
    });

    fireEvent.change(screen.getByLabelText("Name of Hospital :"), {
      target: { value: "Updated Hospital" },
    });

    fireEvent.change(screen.getByLabelText("Locality of Hospital :"), {
      target: { value: "Updated Locality" },
    });

    fireEvent.click(screen.getByText("Update"));

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        `https://localhost:7264/api/Hospital/${mockHospitalId}`,
        {
          hospitalName: "Updated Hospital",
          location: "Updated Locality",
        }
      );

      // Use a custom text matcher to handle variations in the alert message
      expect(screen.getByText(/data updated/i)).toBeInTheDocument();
    });
  });

  it("navigates back to the hospital list", async () => {
    const mockHospitalId = "123";
    axios.get.mockResolvedValue({});
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
      useParams: () => ({ hospitalId: mockHospitalId }),
    }));

    render(
      <MemoryRouter initialEntries={[`/edit/${mockHospitalId}`]}>
        <Routes>
          <Route path="/edit/:hospitalId" element={<EditHospital />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Back"));

    expect(mockNavigate).toHaveBeenCalledWith("/hospital");
  });
});
