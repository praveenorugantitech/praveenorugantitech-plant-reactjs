import React, { useState } from "react";
import Header from "./components/Header";

import PlantList from "./components/PlantList";

const App = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header setPlants={setPlants} setLoading={setLoading} />
      <PlantList plants={plants} loading={loading} />
    </>
  );
};

export default App;
