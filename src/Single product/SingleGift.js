import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './singleProduct.css';
import cartService from '../Services/CartService';
import { toast } from 'react-toastify';

function SingleGift() {
    const navigate = useNavigate();

    // const [cart, setCart] = useState([]);
    // const cart = [];

    var singlegift = JSON.parse(localStorage.getItem("singlegift"));
    // var giftindex = JSON.parse(localStorage.getItem("giftindex"));
    // var localcart = JSON.parse(localStorage.getItem("cart"));



    const addToCart =(event) => {
        event.preventDefault();
        cartService.createCart(singlegift).then(res=>console.log("single: " + JSON.stringify(res.data)));
        toast.success("Added to the cart!");
    //     if(localcart === null){
    //         cart.push(gifts[giftindex])
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //     }
    //     else{
    //     var object = localcart.find((element) => {
    //         if (element.id === gifts[giftindex].id) {
    //             var ele = element;
    //         }
    //         return ele;
    //     })
    //     console.log(object);
    //     if (object === undefined) {
    //         localcart.push(gifts[giftindex])
    //         localStorage.setItem("cart", JSON.stringify(localcart));
    //     }
    //     console.log(localcart, "local");
    // }
    };


    const buynow =(event) => {
        event.preventDefault();
        // if (localcart === null) {
        //     cart.push(gifts[giftindex])
        //     localStorage.setItem("cart", JSON.stringify(cart));
        // }
        // else {
        //     var object = localcart.find((element) => {
        //         if (element.id === gifts[giftindex].id) {
        //             var ele = element;
        //         }
        //         return ele;
        //     })
        //     console.log(object);
        //     if (object === undefined) {
        //         localcart.push(gifts[giftindex])
        //         localStorage.setItem("cart", JSON.stringify(localcart));
        //     }
        //     console.log(localcart);
        // }
        navigate('/single-product/Preview');
    };
    return (
        <>
            <button className='back-icon' onClick={() => navigate(-1)}>
            <Icon name='angle left' size='large' />
            </button>
            <div className='container'>
                <div className='contImage'><img src={singlegift.img} alt="productImage" /></div>
                <div className='contText'>
                    <h2 className='name'>{singlegift.name}</h2>
                    <p className='description'>{singlegift.description}</p>
                    <p className='price'>Rs. {singlegift.price}.00</p>
                    <form>
                        <p className='uploadtext'>Upload your image</p>
                        <input type="file" id='file' className='uploadinput' accept="image/*" /><br />
                        <Button onClick={buynow} className='buttons'>Buy Now</Button>
                        <Button onClick={addToCart} className='buttons'>Add to cart</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SingleGift;