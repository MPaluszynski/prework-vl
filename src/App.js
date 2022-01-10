import "./styles/main-styles.css";

import { Header } from "./components/header/Header.jsx";
import { Data } from "./components/data/Data.jsx";
import { Filters } from "./components/filters/Filters.jsx";
import { Footer } from "./components/footer/Footer.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <Filters />
      <Data />
      <Footer />
    </div>
  );
};

export default App;
