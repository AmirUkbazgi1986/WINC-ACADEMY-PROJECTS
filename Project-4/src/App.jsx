import { useState } from "react";
import Navbar from "./components/Navbar";
import PortfolioItemCard from "./components/PortfolioItemCard";
import SelectedItem from "./components/SelectedItem";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectedId(id) {
    setSelectedId(id);
  }

  function handleBackHomePage() {
    setSelectedId(null);
  }
  return (
    <div>
      <Navbar />
      {selectedId ? (
        <SelectedItem
          selectedId={selectedId}
          onBackHomePage={handleBackHomePage}
        />
      ) : (
        <PortfolioItemCard onSelectedId={handleSelectedId} />
      )}
    </div>
  );
}

export default App;
