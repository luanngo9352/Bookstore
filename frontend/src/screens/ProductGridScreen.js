import React from 'react'
import { FaStar, FaRegStar} from 'react-icons/fa'
import Product from '../componets/Product'
import Loader from '../componets/Loader'
import Message from '../componets/Message'
import { useGetProductsQuery } from '../slices/productsApiSlice'
const ProductGridScreen = () => {
   const {data: products, isLoading, error} = useGetProductsQuery();
  return (
   <>
    <section className='list-products py-5 '>
           <div className='container'>
                <div className='row'>
                <div className="col-lg-3">
        <button
                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
          <span>Show filter</span>
        </button>
       
        <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne"
                        >
                  Related items
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li><p className="text-dark">Electronics </p></li>
                    <li><p className="text-dark">Home items </p></li>
                    <li><p className="text-dark">Books, Magazines </p></li>
                    <li><p className="text-dark">Men's clothing </p></li>
                    <li><p className="text-dark">Interiors items </p></li>
                    <li><p className="text-dark">Underwears </p></li>
                    <li><p className="text-dark">Shoes for men </p></li>
                    <li><p className="text-dark">Accessories </p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                        >
                  Brands
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">
                <div className="accordion-body">
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault1"  />
                      <label className="form-check-label" for="flexRadioDefault1">Mercedes</label>
                    </div>
                   
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault2" />
                      <label className="form-check-label" for="flexRadioDefault2">Toyota</label>
                      
                    </div>
                  
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault3"  />
                      <label className="form-check-label" for="flexRadioDefault3">Mitsubishi</label>
                   
                    </div>
                
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault4"  />
                      <label className="form-check-label" for="flexRadioDefault4">Nissan</label>
                      
                    </div>
                 
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault5" />
                      <label className="form-check-label" for="flexRadioDefault5">Honda</label>
                      
                    </div>
                
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefault6"/>
                      <label className="form-check-label" for="flexRadioDefault6">Suzuki</label>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                        >
                  Price
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">
                  <div className="row mb-3">
                    <div className="col-6">
                      <p className="mb-0">
                        Min
                      </p>
                      <div className="form-outline">
                        <input type="number" id="typeNumber" className="form-control" />
                        <label className="form-label" for="typeNumber">$0</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <p className="mb-0">
                        Max
                      </p>
                      <div className="form-outline">
                        <input type="number" id="typeNumber" className="form-control" />
                        <label className="form-label" for="typeNumber">$1,0000</label>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                  <button type="button" className="btn btn-outline-warning">apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                        >
                  Size
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultform1"  />
                      <label className="form-check-label" for="flexRadioDefaultform1">Nissan</label>
                    </div>
            
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultform2" />
                      <label className="form-check-label" for="flexRadioDefaultform2">Honda</label>
                    </div>
                
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultform3"/>
                      <label className="form-check-label" for="flexRadioDefaultform3">Suzuki</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFive"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFive"
                        >
                  Ratings
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingThree">
                <div className="accordion-body">
          
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultrating1" />
                    <label className="form-check-label rating" for="flexRadioDefaultrating1">
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                    </label>
                  </div>
               
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultrating2"  />
                    <label className="form-check-label rating" for="flexRadioDefaultrating2">
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaRegStar/></spa>
                    </label>
                  </div>
              
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultrating3"  />
                    <label className="form-check-label rating" for="flexRadioDefaultrating3">
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                    </label>
                  </div>
            
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultrating4" />
                    <label className="form-check-label rating" for="flexRadioDefaultrating4">
                          <spa><FaStar/></spa>
                          <spa><FaStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                    </label>
                  </div>
                     <div className="form-check">
                    <input className="form-check-input" type="radio" name='flexRadioDefault' id="flexRadioDefaultrating5"  />
                    <label className="form-check-label rating" for="flexRadioDefaultrating5">
                          <spa><FaStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                          <spa><FaRegStar/></spa>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                </div>
                <div className='col-lg-9'>
                        {isLoading ? (
                        <Loader/>
                    ): error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>
                    ) : (<>
                            <div className='product-card row row-cols-4'>
                            {products.map((product)=>( 
                                <Product product={product}/>
                            ))}
                            </div>
                        </>) }
                </div>
                {/* <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav> */}
            </div>
           </div>
    </section>
   </>
  )
}

export default ProductGridScreen