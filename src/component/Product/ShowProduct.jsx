import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { cartAdd } from "../../../src/component/redux/slice.jsx"
import { cartAdd } from "../redux/slice.jsx"

function Product() {
    const product = [{ id: 1, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 2, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 3, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 4, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 5, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 6, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 7, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 8, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 9, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { id: 10, image: "https://m.media-amazon.com/images/I/81weRj535kL._SL1500_.jpg", price: "2500", description: "Some quick example text to build on the card title and make up the bulk of the card's content." },];
    const dispatch = useDispatch();
    const count = useSelector((state) => state.login?.value);

    const handleAddCart = (event) => {
        if (count) {
            dispatch(cartAdd())
        }
    }

    return (
        <section className='container mt-2'>
            <div className="row ">
                {product?.map((item, index) => {
                    return <div className="col-xl-3 col-lg-2">
                        <div className="card" key={index}>
                            <img src={item?.image} className="card-img-top rounded" alt="mobile" width={200} />
                            <div className="card-body">
                                <h5 className="card-title">Mi Note 15</h5>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-primary" onClick={handleAddCart}>Add to Cart</button>
                                <button className="btn btn-primary m-1">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}
export default Product;