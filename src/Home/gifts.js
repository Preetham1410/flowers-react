import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import gifts from '../Json/GiftsJson';
import './ProductCard.css';
import cartService from '../Services/CartService';

function Gifts({ route }) {
    // const { cart, setCart } = route.params;
    return (
        <>
            <div className='cards'>
            <Card.Group itemsPerRow={4}>
                {gifts.map((data, index) => (
                    <Card className='card' key={data.id}>
                        <Link to='/Home/single-gift' onClick={() => {
                            localStorage.setItem("singlegift", JSON.stringify(data));
                            localStorage.setItem("giftindex", JSON.stringify(index));
                        }}  
                        style={{ textDecoration: "none", color: "black" }}
                        >
                            <Image className='card-image' src={data.img} />
                            <Card.Content className='card-text'>
                                <Card.Header className='card-name'>{data.name}</Card.Header>
                                <Card.Header className='card-price'>Rs. {data.price}.00</Card.Header>
                            </Card.Content>
                        </Link>
                    </Card>
                ))}
                </Card.Group>
            </div>
        </>
    );
}

export default Gifts;