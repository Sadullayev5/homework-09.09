import React from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux'
import { addToCart , removeFromCart , deleteFromCart } from '../../store/cartSlice'
import { notification } from 'antd'


const Cart = () => {
    const dispatch = useDispatch()

    const cutting = (text, limit)=> {
        if (text.length > limit ) {
          return text.slice(0, limit)
        }
        return text
      }

    const cartProducts = useSelector(state => state.cart.products)

    const handleAddProduct = (product) => {
        if(product.quantity < product.stock ){
            dispatch(addToCart({...product, quantity: 1 }))
        }
        else{
            notification.error({message : "Out of stock"})
        }
    }

    const handleRemoveProduct = (product) => {
        if(product.quantity > 1 ){
            dispatch(removeFromCart(product))
        }

    }

    const handleDeleteProduct = (product) => {
        notification.success({message : "Successfully deleted"})
        dispatch(deleteFromCart(product))
    }

  return (
    <div className="cart-products-wrapper">
        {
        cartProducts.map( product => 
            <div className="cart-product" key={product.id}>
                <div className="product-img">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <strong>$ {cutting(`${product.quantity * (product.price + product.price * 0.12)}` , 5)} (with 12% QQS)</strong>
                    <div className="quantity">
                        <button onClick={() => handleRemoveProduct(product)}>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => handleAddProduct(product)}>+</button>
                    </div>
                    <p>Available: {product.stock}</p>
                    <button className='delete-btn' onClick={() => handleDeleteProduct(product)}>Delete from cart</button>
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Cart