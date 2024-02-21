import React, { useState } from 'react';

function CartItem(props) {
    const [quantity, setQuantity] = useState(1);

    const subNum = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const addNum = () => {
        setQuantity(quantity + 1);
    }

    const { data } = props
    let disprice = data.price * quantity;
    return (
        <>
            <td className='cartimage'><img src={data.img} alt="img" /></td>
            <td>{data.name}</td>
            <td>
                <button className='quanbtn minus' onClick={subNum}>-</button>
                <input className='quaninput' value={quantity} readOnly />
                <button className='quanbtn plus' onClick={addNum}>+</button>
            </td>
            <td>Rs.{disprice}.00</td>
        </>
    );
}

export default CartItem;