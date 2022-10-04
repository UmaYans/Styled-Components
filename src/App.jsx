import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route
            index
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
