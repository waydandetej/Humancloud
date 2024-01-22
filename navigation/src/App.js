import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Spage from "./Components/Spage/Spage";
import Tpage from "./Components/Tpage/Tpage";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="simple">
        {/* Add other components or content */}
        <Spage />
      </div>
      <div className="third">
        {/* Add other components or content */}
        <Tpage />
      </div>
    </div>
  );
};

export default App;
