import React from 'react';
import flowers from '../Json/FlowersJson';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import './ProductCard.css';
// import { useCart } from "react-use-cart";


const FlowerCard = (props) => {
    const {cart, setCart} = props

    // const handleClick = (data) => {
    //     console.log(data);
    // }
    console.log()

    return (
        <>
            <div className='cards'>
                {flowers.map((data, index) => (
                    <Card className='card' key={data.id}>
                        <Link to='/flowers/single-product'
                            state={{
                                img: data.img,
                                name: data.Name,
                                desc: data.Description,
                                RNprice: data.price,
                                RVprice: data.RVprice,
                                DNprice: data.DNprice,
                                DVprice: data.DVprice,
                                check: index,
                                cart: cart,
                                setCart: setCart
                            }}
                            style={{ textDecoration: "none", color: "black" }}>
                            <Image className='card-image' src={data.img} />
                            <Card.Content className='card-text'>
                                <Card.Header className='card-name'>{data.Name}</Card.Header>
                                <Card.Meta className='card-price'>Rs. {data.price}.00</Card.Meta>
                            </Card.Content>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default FlowerCard;