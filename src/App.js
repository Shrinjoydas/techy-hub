import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Services from "./Component/Services";


import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router basename="/techy-hub">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
