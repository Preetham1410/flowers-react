import React from 'react';
import { json, useNavigate } from 'react-router-dom';
import { Icon,  Image, Select } from 'semantic-ui-react';
import Logo from '../Images/Logo@3x.png';
import './Header.css';
import cartService from '../Services/CartService';

function Headers(props) {
    const navigate = useNavigate();

    var login = localStorage.getItem('login');
    var loguser = JSON.parse(localStorage.getItem("loguser"));
    
    const handleCartBtn = () =>{
        // cartService.getCart().then(res=>{
        //     navigate('/cart', {state: res.data})
        //     console.log(res.data.length);
        // })
        navigate('/cart');
    }
    
    const handleLogout = () => {
        console.log(loguser);
        navigate('/');
        localStorage.removeItem('login');
        console.log("logout");
    }
    const handleLogin = () => {
        navigate('/Login')
        console.log("login");
    }

    return (
        <header>
            <div className='item'><button className='link' onClick={() => navigate('/')}>
            <Image src={Logo} size='mini'/>
                </button></div>
            <div className='head-name'><h1>Blossom</h1></div>
            <div className='head-icons'>

                <button onClick={() => navigate('/')} className="cartbtn">
                    <div className='cart'>
                    <Icon name='home' size='large' />
                    </div>
                </button>

                {login === "loggedin" ?
                
                    <button onClick={handleLogout} className="cartbtn">
                        <div className='cart'>
                        <Icon name='sign-out' size='large' />
                            <span class="tooltiptext">Logout</span>
                        </div>
                    </button> :
                    <button onClick={handleLogin} className="cartbtn">
                        <div className='cart'>
                        <Icon name='sign-in' size='large' />
                            <span style={{paddingLeft: '5px'}} class="tooltiptext">Login</span>
                        </div>
                    </button>
                }

                <button onClick={handleCartBtn} className="cartbtn">
                    <div className='cart'>
                    <Icon name='shopping cart' size='large' />
                        {/* <div className='cart-items-value'>
                            {cartlength}
                        </div> */}
                    </div>
                </button>
            </div>
        </header>
    );
}
// }

export default Headers;