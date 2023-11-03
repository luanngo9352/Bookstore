import React from 'react'
import products from '../products-and-images/products'
import Product from '../componets/Product'

const Homescreen = () => {
      return (
            <div className='product-card row row-cols-5'>
                {products.slice(0,10) .map((product)=>( 
                     <Product product={product}/>
                ))}
            </div>

      )
    }

export default Homescreen