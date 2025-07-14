import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import TaskDetails from "./components/taskDetails/taskDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kanban-board" element={<Main />} />
        <Route path="/tasks/:taskId" element={<TaskDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
