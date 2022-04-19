import React from "react";
import AdminContext from "./context/AdminContext";
import ClientContext from "./context/ClientContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <ClientContext>
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
};

export default App;
