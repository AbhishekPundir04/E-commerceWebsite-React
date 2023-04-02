
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useState } from "react";
import Home from "./components/Pages/Home";
import Navbar from "./components/Layout/Navbar/Navbar";
import AvailableItems from "./components/Layout/Items/AvailableItems";
import ContactUs from "./components/Pages/ContactUs";
import AboutUs from "./components/Pages/AboutUs";
import Header from "./components/Layout/Header/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import CartProvider from "./components/store/Cart-Provider";

function App() {
  const [cartIsShown, setcartShown] = useState(false)

  const showCarthandler = () =>{
    setcartShown(true)
  }
  const hidCartHandler = () =>{
    setcartShown(false)
  }
  return (
    <Router>
      <CartProvider>
        <header>
        <Navbar onShowCart={showCarthandler}/>
        <Header/>
        </header>
        
        {cartIsShown && <Cart onClose={hidCartHandler}/>}
        <main>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Store">
            <AvailableItems />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/AboutUs">
            <AboutUs/>
          </Route>
        </main>
        <Footer/>
      </CartProvider>
    </Router>
  );
}

export default App;
