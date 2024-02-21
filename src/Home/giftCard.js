import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import gifts from '../Json/GiftsJson';


const GiftCard = () => {
    const cart = [];

    const addtocart = (data,index) => {
        // event.preventDefault();
        var object = cart.find((element) => {
            if (element.id === gifts[index].id) {
                var ele = element;
            }
            return ele;
        })
        console.log(object);
        if (object === undefined) {
         cart.push(gifts[index]);
         localStorage.setItem("cart", JSON.stringify(cart));
        }
        console.log(cart);
    };
    return (
        <>
            <div className='cards'>
                {gifts.map((data, index) => (
                    <Card className='card' key={data.id}>
                        <Link to='/gifts/single-product'
                            state={{
                                img: data.img,
                                name: data.Name,
                                desc: data.Description,
                                price: data.price,
                                checks: index,
                                cart: cart,
                            }}
                            style={{ textDecoration: "none", color: "black" }}>
                            {/* <div className='card-text'>
                                <p className={data.id}>{data.Name}</p>
                                <h4>Rs. {data.price}.00</h4>
                            </div> */}
                            <Image className='card-image' src={data.img} />
                            <Card.Content className='card-text'>
                                <Card.Header className='card-name'>{data.Name}</Card.Header>
                                <Card.Meta className='card-price'>Rs. {data.price}.00</Card.Meta>
                            </Card.Content>
                        </Link>
                        {/* <div className='cartdiv'> */}
                        {/* <button className='addtocart' onClick={() => addtocart(data, index)}>Add to Cart</button> */}
                        {/* <button>Add to Cart</button> */}
                        {/* </div> */}
                    </Card>
                ))}
            </div>
        </>
    );
}

export default GiftCard;