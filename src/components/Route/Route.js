import { Outlet } from 'react-router-dom'
import {Fragment, useState} from 'react'

import NavBar from '../Layout/NavBar/NavBar'
import Cart from '../Cart/Cart'
const RouteLayout = props =>{
const [cartShown, setCart] = useState(false)

const showCartHandler = () =>{
    setCart(true)
}
const hideCartHandler = () =>{
    setCart(false)
}

    return <Fragment>
        <NavBar onShowCart={showCartHandler}/>
        {cartShown && <Cart onClose={hideCartHandler}/>}
        
    <Outlet/>
    </Fragment>
}
export default RouteLayout