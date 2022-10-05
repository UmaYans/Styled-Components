import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Details from "./components/pages/Details";
import NotFound from "./components/pages/NotFound";
import { useState } from "react";
import Layout from "./layots/MainLayot";

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
