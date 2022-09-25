import React from "react";
import CounterCard from "./components/CounterCard";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#48A9A6",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CounterCard />
    </div>
  );
}

export default App;
