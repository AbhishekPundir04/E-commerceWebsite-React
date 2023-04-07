import React, { Fragment, useContext } from "react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Header from "./components/Layout/Header/Header";
import AvailableItems from "./components/Layout/Items/AvailableItems";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import AuthForm from "./components/LoginForm/AuthForm";
import Footer from "./components/Layout/Footer/Footer";
import CartProvider from "./components/store/Cart-Provider";
import Cart from "./components/Cart/Cart";
import AboutUs from "./components/Pages/AboutUs";
import AuthContext from "./auth/auth-context";

const App = () => {
  const [cartIsShown, setcartShown] = useState(false);

  const showCarthandler = () => {
    setcartShown(true);
  };
  const hidCartHandler = () => {
    setcartShown(false);
  };

  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <CartProvider>
        <header>
          <Navbar onShowCart={showCarthandler} />
          <Header />
        </header>
        {cartIsShown && <Cart onClose={hidCartHandler} />}
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/Store" exact>
          {authCtx.isLoggedIn && <AvailableItems />} 
          {!authCtx.isLoggedIn && <Redirect to='/Login'/>}
            </Route>
          
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/Login" exact>
            <AuthForm />
          </Route>
          <Route path="/AboutUs" exact>
            <AboutUs />
          </Route>
         
        </Switch>
        <Footer />
      </CartProvider>
    </Fragment>
  );
};
export default App;


// import { BrowserRouter as Router, Route } from "react-router-dom";

// import { useState } from "react";
// import Home from "./components/Pages/Home";
// import Navbar from "./components/Layout/Navbar/Navbar";
// import AvailableItems from "./components/Layout/Items/AvailableItems";
// import ContactUs from "./components/Pages/ContactUs";
// import AboutUs from "./components/Pages/AboutUs";
// import Header from "./components/Layout/Header/Header";
// import Cart from "./components/Cart/Cart";

// import Footer from "./components/Layout/Footer/Footer";
// import AuthForm from "./components/LoginForm/AuthForm";
// import CartProvider from "./components/store/Cart-Provider";
// function App() {
//   const [cartIsShown, setcartShown] = useState(false)

//   const showCarthandler = () =>{
//     setcartShown(true)
//   }
//   const hidCartHandler = () =>{
//     setcartShown(false)
//   }
//   return (
//     <Router>
//       <CartProvider>
//         <header>
//         <Navbar onShowCart={showCarthandler}/>
//         <Header/>
//         </header>

//         {cartIsShown && <Cart onClose={hidCartHandler}/>}
//         <main>
//           <Route path="/Home">
//             <Home />
//           </Route>
//           <Route path="/Store">
//             <AvailableItems />
//           </Route>
//           <Route path="/ContactUs">
//             <ContactUs />
//           </Route>
//           <Route path="/Login">
//             <AuthForm/>
//           </Route>

//           <Route path="/AboutUs">
//             <AboutUs/>
//           </Route>
//         </main>
//         <Footer/>
//         </CartProvider>

//     </Router>
//   );
// }

// export default App;
