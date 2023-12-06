import {useParams,useNavigate } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Image, Button} from 'react-bootstrap';
import Rating from '../componets/Rating';
import {BsCart, BsFillHeartFill} from 'react-icons/bs';
import Loader from '../componets/Loader';
import Message from '../componets/Message';
import { useGetProductDetailQuery } from '../slices/productsApiSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addToCart} from '../slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
const ProductScreem = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch(); 
  const [ qty, setQuantity] = useState(1);   
  const {id: productId}= useParams();
  const { data : product,isLoading, error }= useGetProductDetailQuery(productId);
  const decreaseQty = () =>{
    const count = document.querySelector('.count');
    if(count.valueAsNumber <= 1 ) return;
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);      
  }
  const increaseQty = () =>{
    const count = document.querySelector('.count');
    if(count.valueAsNumber>product.bookQuaranty) return;
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  }
  const addToCartAndBuyHandler = () =>{
    dispatch (addToCart({...product, qty}));
    navigate ('/cart');
  }
  const addToCartHandler = () =>{
      dispatch (addToCart({...product , qty}))
      showToastMessage();
   
  }
  const showToastMessage = () => {
    toast.success("Thêm sản phẩm vào giỏi hàng thành công !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
   <>
   {isLoading ? (
                <Loader />
            ): error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>
            ) : (<>
                <section className='home-wrapper-2 py-5'>
                          <div className='container'>
                            <div className='categories row'>
                                <div className='col-md-6'>
                                <Image src={product.bookImage} alt={product.bookName} fluid/>
                                </div>
                                <div className=' col-md-6'>
                                        <h3>{product.bookName}</h3>
                                          <div className='row row-cols-2 my-3'>
                                              <div className="col"><span>Thể loại: <span style={{ fontWeight: '600'}}>{product.category}</span></span></div>
                                              <div className="col"><span>Tên tác giả: <span style={{ fontWeight: '600'}}>{product.author}</span></span></div>
                                              <div className="col"><span>Nhà xuất bản: <span style={{ fontWeight: '600'}}>{product.publicCompany}</span></span></div>
                                              <div className="col"><span>Hình thức: <span style={{ fontWeight: '600'}}>{product.form}</span></span></div>
                                          </div>
                                          <div className='product-screem mb-3'>
                                            <div className='row '>
                                              <div className='col-sm-4'>
                                                  <Rating  value={product.rating} text={`(${product.bookQuaranty} Đánh Giá)`}/>
                                              </div>
                                              <div className='col-sm-8'>
                                              <strong className='font-c-status'>
                                                        {product.bookQuaranty > 0 ? 'Còn Hàng': 'Hết Hàng' }
                                                </strong> 
                                              </div>
                                            
                                            </div>
                                          </div>  
                                          <div className='product-price mb-3'>
                                            <span>${product.bookPrice} </span>
                                          </div>
                                          <div className='row mb-4'>
                                                <div className="col-sm-2 d-flex align-items-center"><label> Số Lượng: </label></div>
                                                <div className="col-sm-10 w-50">
                                                  <div className='input-group w-75' >
                                                    <button className="btn btn-outline-secondary px-3 " type="button" onClick={decreaseQty} >
                                                        <AiOutlineMinus/>
                                                    </button>
                                                    <input type="number" className="form-control count input-cart"  value={qty} readOnly/>
                                                    <button className="btn btn-outline-secondary px-3 " type="button" onClick={increaseQty}>
                                                        <AiOutlinePlus/>
                                                    </button>
                                                  </div>
                                                </div>
                                          </div>
                                          <div className='row row-cols-auto'>
                                              <div className='col'>
                                              <Button className='btn-block'
                                              type='button'
                                              disabled= {product.countInStock === 0}
                                               onClick={addToCartHandler}
                                              >
                                                <span className='me-2 mb-10'><BsCart size={20}/></span>
                                                <span>Thêm Vào Giỏi Hàng</span>        
                                              </Button>
                                              <ToastContainer/>
                                              </div>
                                              <div className='col'>
                                              <Button className='btn-block'
                                              type='button'
                                              disabled= {product.countInStock === 0}
                                              onClick={addToCartAndBuyHandler}
                                              >
                                        
                                                <span>Mua Ngay</span>        
                                              </Button>
                                              </div>
                                              <div className='col'>
                                              <Button className='btn-block'
                                              type='button'
                                              >
                                                <span className='me-2 '><BsFillHeartFill size={20}/></span>
                                                <span>Yêu Thích</span>        
                                              </Button>
                                              </div>
                                          </div>
                                </div>
                            </div>
                        </div>
              </section>
            <section className='home-wrapper-2 py-5'>
              <div className='container'>
                  <div className='col-12 categories'>
                  <span className='header-tile' >Thông tin sản phẩm</span>
                  </div>
                  
                    <div className='categories'> 
                          <div className='container'>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Nhà Xuất Bản</span></div>
                                <div className='col-sm-10'> {product.publicCompany}</div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Tác Giả</span></div>
                                <div className='col-sm-10'>{product.author}</div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Thể Loại</span></div>
                                <div className='col-sm-10'> {product.category}</div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Ngôn Ngữ</span></div>
                                <div className='col-sm-10'>{product.language}</div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Hình Thức</span></div>
                                <div className='col-sm-10'>{product.form}</div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-sm-2'><span>Số Trang</span></div>
                                <div className='col-sm-10'> {product.pageNumber}</div>
                            </div>
                          </div>
                        <hr/>
                        <div className='container'>
                              <h3 className='mb-4'>{product.bookName}</h3>
                            <div className='col-md-12'>
                                {product.bookDetail}
                            </div>  
                        </div>
                    </div>
              </div>
          </section>
                </>) }
    {/* <section className='home-wrapper-2 py-5'>
        <div className='container'>
                    <div className='categories row'>
                        <div className='col-md-6'>
                        <Image src={product.bookImage} alt={product.bookName} fluid/>
                        </div>
                        <div className=' col-md-6'>
                                <h3>{product.bookName}</h3>
                                  <div className='row row-cols-2 my-3'>
                                      <div className="col"><span>Thể loại: {product.category}</span></div>
                                      <div className="col"><span>Tên tác giả: {product.author}</span></div>
                                      <div className="col"><span>Nhà xuất bản: {product.publisher}</span></div>
                                      <div className="col"><span>Hình thức: {product.form}</span></div>
                                  </div>
                                  <div className='product-screem mb-3'>
                                    <div className='row '>
                                      <div className='col-sm-4'>
                                          <Rating  value={product.rating} text={`(${product.bookQuaranty} Đánh Giá)`}/>
                                       </div>
                                       <div className='col-sm-8'>
                                       <strong className='font-c-status'>
                                                {product.countInStock > 0 ? 'Còn Hàng': 'Hết Hàng' }
                                        </strong> 
                                       </div>
                                     
                                    </div>
                                  </div>  
                                  <div className='product-price mb-3'>
                                    <span>${product.bookPrice} </span>
                                  </div>
                                  <div className='row mb-4'>
                                        <div className="col-sm-8"><label> Số Lượng: </label></div>
                                        <div className="col-sm-4">col-sm-4</div>
                                  </div>
                                  <div className='row row-cols-auto'>
                                      <div className='col'>
                                       <Button className='btn-block'
                                       type='button'
                                       disabled= {product.countInStock === 0}
                                       >
                                        <span className='me-2 mb-10'><BsCart size={20}/></span>
                                        <span>Thêm Vào Giỏi Hàng</span>        
                                       </Button>
                                      </div>
                                      <div className='col'>
                                       <Button className='btn-block'
                                       type='button'
                                       disabled= {product.countInStock === 0}
                                       >
                                        <span>Mua Ngay</span>        
                                       </Button>
                                      </div>
                                      <div className='col'>
                                       <Button className='btn-block'
                                       type='button'
                                       >
                                        <span className='me-2 '><BsFillHeartFill size={20}/></span>
                                        <span>Yêu Thích</span>        
                                       </Button>
                                      </div>
                                  </div>
                        </div>
                    </div>
        </div>
    </section> */}
    {/* <section className='home-wrapper-2 py-5'>
        <div className='container'>
            <div className='col-12 categories'>
            <span className='header-tile' >Thông tin sản phẩm</span>
            </div>
             
              <div className='categories'> 
                    <div className='container'>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Nhà Xuất Bản</span></div>
                          <div className='col-sm-10'> Thai hoai</div>
                      </div>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Tác Giả</span></div>
                          <div className='col-sm-10'>{product.author}</div>
                      </div>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Thể Loại</span></div>
                          <div className='col-sm-10'> {product.category}</div>
                      </div>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Ngôn Ngữ</span></div>
                          <div className='col-sm-10'> Thai hoai</div>
                      </div>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Hình Thức</span></div>
                          <div className='col-sm-10'> Thai hoai</div>
                      </div>
                      <div className='row mb-4'>
                          <div className='col-sm-2'><span>Số Trang</span></div>
                          <div className='col-sm-10'> Thai hoai</div>
                      </div>
                    </div>
                  <hr/>
                  <div className='container'>
                        <h3 className='mb-4'>{product.bookName}</h3>
                      <div className='col-md-12'>
                          {product.bookDetail}
                      </div>  
                  </div>
              </div>
                  
        </div>
    </section> */}
   </>
  )
}

export default ProductScreem