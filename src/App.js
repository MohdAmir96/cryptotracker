import logo from "./logo.svg";
import "./App.css";
<<<<<<< HEAD
import ToDoList from "./ToDoList";
import Task from "./Task";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DashboardPage from "./pages/dashboard";
import CoinPage from "./pages/coin";
import ComparePage from "./pages/compare";
import WatchListPage from "./pages/watchlist";
import { useEffect } from "react";
>>>>>>> 6ab069bb17656c8064f01334a864c4f45e1d97d5

function App() {
  var cursor;
  var cursorPointer;

  useEffect(() => {
    cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px")
      );
    });
    cursorPointer = document.getElementById("cursor-pointer");
    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });

    document.body.addEventListener("mousedown", function (e) {
      return (
        (cursor.style.height = "0.5rem"),
        (cursor.style.width = "0.5rem"),
        (cursorPointer.style.height = "3rem"),
        (cursorPointer.style.width = "3rem")
      );
    });

    document.body.addEventListener("mouseup", function (e) {
      return (
        (cursor.style.height = "0.3rem"),
        (cursor.style.width = "0.3rem"),
        (cursorPointer.style.height = "2rem"),
        (cursorPointer.style.width = "2rem")
      );
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="App">
      {/* <ToDoList /> */}
      <Task />
=======
    <div>
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 6ab069bb17656c8064f01334a864c4f45e1d97d5
    </div>
  );
}

export default App;
