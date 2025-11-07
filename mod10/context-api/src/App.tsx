// import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <NavBar />
      <h1>Context API</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam rerum
        magnam, enim impedit excepturi voluptate perferendis vero suscipit,
        maxime sint beatae quasi inventore nobis ipsum autem. Quis animi sunt
        suscipit?
      </p>

      <Content />

      <UserProfile />
    </>
  );
}

export default App;
