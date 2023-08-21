import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./Components/LogIn/LoginForm";
import AdminPage from "./Components/Welcome/AdminPage/AdminPage"
import AddHospital from "./Components/Welcome/Hospital/AddHospital";
import AddUser from "./Components/Welcome/Users/AddUser";
import EditUser from "./Components/Welcome/Users/EditUser";
import AddRole from "./Components/Welcome/Roles/AddRole";
import HospitalPage from "./Components/Welcome/Hospital/HospitalPage";
import UserPage from "./Components/Welcome/Users/UserPage";
import EditHospital from "./Components/Welcome/Hospital/EditHospital";
import RolePage from "./Components/Welcome/Roles/RolePage";
import AboutUs from "./Components/Welcome/UiPages/AboutUs";
import Services from "./Components/Welcome/UiPages/Services";
import Error from "./Components/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/addhospital" element={<AddHospital />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:userId" element={<EditUser />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/addrole" element={<AddRole />} />
          <Route path="/edithospital/:hospitalId" element={<EditHospital />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
