import './App.css';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import  { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home';
import AvailableItems from './components/Layout/Items/AvailableItems';

const router = createBrowserRouter([
  {path: '/', element: <p><Home/></p>},
  {path:'/store', element: <AvailableItems/>}
]);
function App() {
  return (
    <div>
    <div>
    <RouterProvider router={router}/>
    </div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
    
  );
}

export default App;
