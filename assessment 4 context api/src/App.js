import React from "react";
import Home from "./component/Home";
import { ThemeContext } from "./context/themeContext";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "dark" : "light"}>
      <Home/>
    </div>
  );
}

export default App;
