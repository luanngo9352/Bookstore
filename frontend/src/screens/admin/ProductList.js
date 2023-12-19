import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { toast } from 'react-toastify';
import Message from '../../componets/Message';
import Loader from '../../componets/Loader';
import Paginate from '../../componets/Paginate';
import { useGetProductsQuery,useCreateProductMutation } from '../../slices/productsApiSlice';
const ProductList = () => {
    const {pageNumber} = useParams()
    const { data, isLoading, error, refetch } = useGetProductsQuery({pageNumber});
    const [ createProduct,{isLoading: loadingCreate}] = useCreateProductMutation();
    const createProductHandler= async ()=> {
        if (window.confirm('Are you sure you want to create a new product?')) {
            try {
              await createProduct();
              refetch();
            } catch (err) {
              toast.error(err?.data?.message || err.error);
            }
          }
    }
    const deleteHandler = (id) => {
        console.log('id',id)
    }
  return (
    <>
    <div className='row'>
        <div className='col-md-2'>
            <Sidebar />
        </div>
        {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <div className='col-md-10'>
            <Col className='text-end'>
            <Button className='my-3'onClick={createProductHandler} >
                <FaPlus /> Create Product
            </Button>
            </Col>
            {loadingCreate && <Loader />}
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>Num</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td >{product.bookName}</td>
                  <td>${product.bookPrice}</td>
                  <td>{product.bookQuaranty}</td>
                  <td>{product.category}</td>
                  <td>{product.publicCompany}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm mx-2'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                       
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-3">
          <Paginate pages={data.pages} page={data.page} isAdmin={true}/>
          </div>
          </div>
        </>
      )}

    </div>
    </>
  )
}

export default ProductList