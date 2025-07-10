import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/ems-frontend/" element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/employees */}
          <Route path="/ems-frontend/employees" element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/add-employee */}
          <Route path="/ems-frontend/add-employee" element={<EmployeeComponent />} />
          {/* http://localhost:3000/update-employee/2 */}
          <Route path="/ems-frontend/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
