import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutsUs";
import RouteLayout from "./components/Route/Route";
import Error from "./components/ErrorPage/Error";
import AvailableItems from "./components/Layout/Items/AvailableItems";
// import Header from "./components/Layout/Header/Header";
import Contact from "./components/Pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/store", element: <AvailableItems /> },
      { path:"/contactus", element: <Contact/>}
    ],
  },

  
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Header/> */}
    </div>
  );
}

export default App;
