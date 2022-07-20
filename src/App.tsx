import React, { useState } from "react";
import "./App.css";
import Pokes from "./component/Pokes";

const App: React.FC = () => {
  const [openPokes, setOpenPokes] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpenPokes(true)}>SHOW POKES</button>
      {openPokes && <Pokes pokeurl={"/pokemon"} openPokes={openPokes} />}
    </div>
  );
};

export default App;
