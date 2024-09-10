import React, { useEffect } from 'react'
import axios from '../../api/axios'
import { useState } from 'react'
import './Home.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { notification } from 'antd'


const Home = () => {

    const dispatch = useDispatch()
    const [products , setProducts] = useState([])

    useEffect(() => {
        axios('/products')
    .then(response => response.data)
    .then(data => setProducts(data.products))
    } , [])

    const handleAddProduct = (product) => {
        notification.success({message : "Added to cart"})
        dispatch(addToCart({...product, quantity: 1 }))
    }
    
  return (
    <div className='home'>
        <div className="card-wrapper">
        {
        products.map( product => 
            <div className="card" key={product.id}>
                <div className="card-img">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="card-info">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <strong>${product.price}</strong>
                    <p>Available: {product.stock}</p>
                    <button onClick={() => handleAddProduct(product)}>Add to cart</button>
                </div>
            </div>
        )
      }
        </div>
    </div>
  )
}

export default Home