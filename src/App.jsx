import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

const App = () => {
  const [data, setData] = useState([]);

  const updateData = (userData) => {
    setData([...data, userData]);
  };

  return (
    <div className="main-container">
      <h1 style={{ textAlign: "center" }}>Power Soft</h1>
      <h3>Row input</h3>
      <ComponentA updateData={updateData} />
      <h3>Table data</h3>
      <ComponentB data={data} />
    </div>
  );
};

export default App;
