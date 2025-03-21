import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.login?.cartValue);

    return (
        <div className='container text-center mt-5'>
            <button>Total Qty :- {cart}</button>
            <button>Total Price :- 8999</button>
            <div>
                <img src="https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg" width={200} />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, quibusdam?</p>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <button>Checkout</button>
            <button>Clear Cart</button>
        </div>
    )
}
export default Cart