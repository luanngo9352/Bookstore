import React, { useMemo } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Product from "../componets/Product";
import Loader from "../componets/Loader";
import Message from "../componets/Message";
import { useParams } from "react-router-dom";
import Paginate from "../componets/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const ProductGridScreen = () => {
  const {pageNumber} = useParams();
  const { data: products, isLoading, error } = useGetProductsQuery({pageNumber});

  
  const pages = useMemo(() => {
    if (!products) return 0;
    
    if(products.pages)
       return products.pages 

  }, [products,]);
  const page = useMemo(() => {
    if (!products) return 0;
         
    if(products.page)
    return products.page
  }, [products]);

  
  return (
    <>
      <section className="list-products py-5 ">
        <div className="container">
          <div className="row">
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

              <div
                className="collapse card d-lg-block mb-5"
                id="navbarSupportedContent"
              >
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
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled">
                          <li>
                            <p className="text-dark">Electronics </p>
                          </li>
                          <li>
                            <p className="text-dark">Home items </p>
                          </li>
                          <li>
                            <p className="text-dark">Books, Magazines </p>
                          </li>
                          <li>
                            <p className="text-dark">Men's clothing </p>
                          </li>
                          <li>
                            <p className="text-dark">Interiors items </p>
                          </li>
                          <li>
                            <p className="text-dark">Underwears </p>
                          </li>
                          <li>
                            <p className="text-dark">Shoes for men </p>
                          </li>
                          <li>
                            <p className="text-dark">Accessories </p>
                          </li>
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
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Mercedes
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Toyota
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault3"
                            >
                              Mitsubishi
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault4"
                            >
                              Nissan
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault5"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault5"
                            >
                              Honda
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault6"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault6"
                            >
                              Suzuki
                            </label>
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
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div className="row mb-3">
                          <div className="col-6">
                            <p className="mb-0">Min</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                              />
                              <label className="form-label" for="typeNumber">
                                $0
                              </label>
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Max</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                              />
                              <label className="form-label" for="typeNumber">
                                $1,0000
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                          >
                            apply
                          </button>
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
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform1"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform1"
                            >
                              Nissan
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform2"
                            >
                              Honda
                            </label>
                          </div>

                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefaultform3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefaultform3"
                            >
                              Suzuki
                            </label>
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
                    <div
                      id="panelsStayOpen-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating1"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating1"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating2"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating2"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating3"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating3"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating4"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating4"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefaultrating5"
                          />
                          <label
                            className="form-check-label rating"
                            for="flexRadioDefaultrating5"
                          >
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                            <span>
                              <FaRegStar />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {isLoading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">
                  {error?.data?.message || error.error}
                </Message>
              ) : (
                <>
                  <div className="product-card row row-cols-4">
                    {products.products && products.products.map((product) => (
                      <Product product={product} />
                    ))}
                  </div>
                </>
              )}
              <div className="d-flex justify-content-center mt-3">
            <Paginate pages={pages} page={page}/>
            </div>
            </div>
            {/* <div className="d-flex justify-content-center mt-3">
            <Paginate pages={data.pages} page={data.page}/>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGridScreen;
