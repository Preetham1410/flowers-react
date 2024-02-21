import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartItem from './cartitem';
import { Button, Icon } from 'semantic-ui-react'
import './Cart.css';
import cartService from '../Services/CartService';

function Cart() {
    let navigate = useNavigate();
    let [cartState,setCartState] = useState([]);

    useEffect(()=>{
        cartService.getCart().then(res=>setCartState(res.data));
    })
    
    // console.log(cart);
    // window.location.reload();

    // let cart = JSON.parse(localStorage.getItem("cart"));
    let login = localStorage.getItem("login");


    function handleRemove(id, index) {
        var filtered = (cartState.filter((item) => item.id !== id));
        console.log(filtered);
        // localStorage.setItem('cart', JSON.stringify(filtered));
        cartService.deleteCart(id).then(res => {
            console.log(res.data);
            setCartState(filtered)
        });
    }
     


    return (
        <>
            <button className='back-icon' onClick={() => navigate(-1)}>
                <Icon name='angle left' size='large' />
            </button>
            {/* <Button className='butts orderbut' onClick={() => navigate('/your-orders')}>Your Orders</Button> */}
            {cartState.length > 0 ? (
                <div className='cartdiv'>
                    <div className='cart-head'><h2>Your Cart</h2></div>
                    <table className='carttable'>
                        <tbody>
                            <tr className='table-head'>
                                <td className='cartimage'>Image</td>
                                <td>Name</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Remove</td>
                            </tr>
                            {cartState.map((data, index) => {
                                return (
                                    <tr key={data.id}>
                                        <CartItem data={data} />
                                        <td><button className='removebtn' onClick={() => handleRemove(data.id, index)} >
                                            <Icon name='trash alternate' size='large' />
                                        </button></td>
                                    </tr>
                                )
                            }).reverse()}

                        </tbody>
                    </table>
                    <div className='total-items'>
                        <p className=''>
                            Total items :{cartState.length} Item(s)
                        </p>
                        {login === "loggedin" ?
                            <Link to="/single-product/Preview">
                                <button className='checkout'>Checkout</button>
                            </Link> :
                            <Link to="/Login">
                                <button className='checkout'>Checkout</button>
                            </Link>
                        }
                    </div>
                </div>
            ) : <div className='cartt'>
                <h1 style={{ textAlign: "center" }}>Your cart is Empty</h1>
            </div>
            }

        </>
    );
}

export default Cart;