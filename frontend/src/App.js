import Header from './componets/Header'
import Footer from './componets/Footer';
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';
const App = () => {
  return(
    <>
      <Header />
      <main className='py-3' style={{backgroundColor:'#f5f5f7'}}>
      <Container>
        <Outlet />
      </Container>
      </main>
      <Footer />
    </>  
  )
  };

export default App;
