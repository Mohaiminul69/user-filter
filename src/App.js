import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserActivity from "./Components/UserActivity/UserActivity";
import FilteredUsers from "./Components/UserActivity/FilteredUsers/FilteredUsers";
import EditFilter from "./Components/UserActivity/EditFilter";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userActivity" element={<UserActivity />} />
          <Route path="/filteredUsers" element={<FilteredUsers />} />
          <Route path="/editFilter" element={<EditFilter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
