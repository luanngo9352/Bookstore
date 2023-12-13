import Product from '../componets/Product'
import Loader from '../componets/Loader';
import Message from '../componets/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
const HomeScreen = () => {
    const {data , isLoading, error} = useGetProductsQuery();

      return (
        <>
            {isLoading ? (
                <Loader />
            ): error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>
            ) : (<>
                <div className='product-card row row-cols-5'>
                {data.products.slice(0,10).map((product)=>(  
                     <Product product={product}/>
                ))}
            </div>
                </>) }
        </>
      );
    };

export default HomeScreen