import React, { useState } from "react";
import "./App.css";
import { MainLayout } from "./components";
import { BlankLayout } from "./components/Blank";

function App() {
  const [nextPage, setNextPage] = useState(false);
  return (
    <div className="App">
      {nextPage ? <BlankLayout /> : <MainLayout nextPage={setNextPage} />}
    </div>
  );
}

export default App;
