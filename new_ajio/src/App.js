import { WomanOutlined } from "@ant-design/icons";
import Header from "./Components/First/Header";
import Home from "./Components/Home";
import Men from "./Components/Menu/Men";
import Women from "./Components/Menu/Women";
import Kids from "./Components/Menu/Kids";

import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <>
    //   <Header />
    //   <ImageSlider />
    // </>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />

        {/* Your Route components go here */}
        {/* <Route path="/" element={<Header />} /> */}
        {/* <Route path="/imageslider" element={<ImageSlider />} /> */}
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
