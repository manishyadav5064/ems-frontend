import EmployeeComponent from "./components/EmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <HeaderComponent />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<ListEmployeeComponent />} />
          {/* http://localhost:3000/employees */}
          <Route
            path="/employees"
            element={<ListEmployeeComponent />}
          />
          {/* http://localhost:3000/add-employee */}
          <Route
            path="/add-employee"
            element={<EmployeeComponent />}
          />
          {/* http://localhost:3000/update-employee/2 */}
          <Route
            path="/update-employee/:id"
            element={<EmployeeComponent />}
          />
        </Routes>
        <FooterComponent />
      </HashRouter>
    </>
  );
}

export default App;
