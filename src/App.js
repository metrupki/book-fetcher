import React from "react";
import Home from './pages/Home';
import GlobalStyles from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SearchBar />
      <Route path={["/book/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
