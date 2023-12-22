import { useState } from "react";
import "./App.css";
import { portfolioItems } from "./utils/data";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  return (
    <div>
      <div className="App"></div>
      {selectedItem ? (
        <PortfolioItemPage selectedItem={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
