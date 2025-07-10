import React from "react";

function HeaderComponent() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a
          className="navbar-brand text-white container-fluid"
          href="http://localhost:3000/"
        >
          Employee Management System
        </a>
      </nav>
    </header>
  );
}

export default HeaderComponent;
