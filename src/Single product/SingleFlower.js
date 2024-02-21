import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import cartService from '../Services/CartService';

function SingleFlower() {
    var navigate = useNavigate();

    var singleflower = JSON.parse(localStorage.getItem("singleflower"));
    // var flowerindex = JSON.parse(localStorage.getItem("flowerindex"));
    // var localcart = JSON.parse(localStorage.getItem("cart"));

    // const cart =[];


    const addToCart = (event) => {
        event.preventDefault();
        cartService.createCart(singleflower).then(res=>{
            console.log("single: " + JSON.stringify(res.data))
            toast.success("Added to the cart!");
        });
    //     if(localcart === null){
    //         cart.push(flowers[flowerindex])
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //     }
    //     else{
    //     var object = localcart.find((element) => {
    //         if (element.id === flowers[flowerindex].id) {
    //             var ele = element;
    //         }
    //         return ele;
    //     })
    //     console.log(object);
    //     if (object === undefined) {
    //         localcart.push(flowers[flowerindex])
    //         localStorage.setItem("cart", JSON.stringify(localcart));
    //     }
    //     console.log(localcart, "local");
    // }
    };


    // const buynow = (event) => {
    //     event.preventDefault();
    //     if (localcart === null) {
    //         cart.push(flowers[flowerindex])
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //     }
    //     else {
    //         var object = localcart.find((element) => {
    //             if (element.id === flowers[flowerindex].id) {
    //                 var ele = element;
    //             }
    //             return ele;
    //         })
    //         console.log(object);
    //         if (object === undefined) {
    //             localcart.push(flowers[flowerindex])
    //             localStorage.setItem("cart", JSON.stringify(localcart));
    //         }
    //         console.log(localcart);
    //     }
    //     navigate('/single-product/Preview');
    // };


    return (
        <>
            <button className='back-icon' onClick={()=> navigate(-1)}>
            <Icon name='angle left' size='large' />
            </button>
            {/* <Header cartlen={cart.length} price={price} /> */}
            <div className='container'>
                <div className='contImage'><img src={singleflower.img} alt="productImage" /></div>
                <div className='contText'>
                    <h2 className='name'>{singleflower.name}</h2>
                    <p className='description'>{singleflower.description}</p>
                    <div className="price">Rs. {singleflower.price}.00</div>
                    <hr />
                    {/* <p className='uploadtext'>Customize your order</p>
                    <form onSubmit={handleSubmit}>
                        <p>DOUBLE FLOWER</p>
                        <div className='cust-inp'>
                            <input
                                type="radio" value="regular"
                                className='custinput'
                                checked={double === "regular"}
                                onChange={() => setDouble("regular")}
                                name='double' />Regular  flowers

                            <input type="radio" value="double"
                                className='custinput'
                                checked={double === "double"}
                                onChange={() => setDouble("double")}
                                name='double' />Double flower
                        </div>
                        <p>ADD VASE</p>
                        <div className='cust-inp'>
                            <input type="radio" value="novase"
                                className='custinput'
                                checked={vase === "novase"}
                                onChange={() => setVase("novase")}
                                name='vase' />No vase

                            <input type="radio" value="addvase"
                                className='custinput'
                                checked={vase === "addvase"}
                                onChange={() => setVase("addvase")}
                                name='vase' />Add vase

                        </div>
                        <Button className='custombtn' type='submit'>Customize</Button><br />
                    </form> */}
                            {/* <Button onClick={buynow} className='buttons'>Buy Now</Button> */}
                        <Button onClick={addToCart} className='buttons'>Add to cart</Button>
                </div>
            </div>
        </>
    );
}

export default SingleFlower;