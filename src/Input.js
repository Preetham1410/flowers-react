import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login page/Login';
import Home from './Home/home';
import SingleGift from './Single product/SingleGift';
import SingleFlower from './Single product/SingleFlower';
import Cart from './Cart/cart';
import Preview from './preview page/preview';
import Signup from './Login page/Signup';
import Orders from './Cart/orders';


function Input() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/Login' element={< Login />}></Route>
					<Route exact path='/signup' element={< Signup />}></Route>
					{/* <Route exact path='/Home/single-gift' element={<SingleGift />}></Route> */}
					<Route exact path='/Home/single-flower' element={<SingleFlower />}></Route>
					<Route exact path='/cart' element={<Cart />}></Route>
					<Route exact path='/single-product/Preview' element={<Preview />}></Route>
					<Route exact path='/your-orders' element={<Orders />}></Route>
				</Routes>
			</div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		</>
	);
}
export default Input;