import {useEffect, useState} from 'react'
// import products from '../products-and-images/products'
import Product from '../componets/Product'
import axios from 'axios'


const Homescreen = () => {
    const [products,setProduct]= useState([])
    useEffect(() => {
        const fetchProduct = async() => {
            const { data} = await axios.get('/api/products');
            setProduct(data);
        };
        fetchProduct();
    }, []);
      return (
            <div className='product-card row row-cols-5'>
                {products.slice(0,10).map((product)=>( 
                     <Product product={product}/>
                ))}
            </div>

      )
    }

export default Homescreen