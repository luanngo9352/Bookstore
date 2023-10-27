import Header from './componets/Header'
import Footer from './componets/Footer';
import Home from './pages/Home';
import { Container } from 'react-bootstrap'
const App = () => {
  return(
    <>
      <Header />
      <main className='py-3' style={{backgroundColor:'#f5f5f7'}}>
      <Container>
        <Home/>
      </Container>
      </main>
      <Footer />
    </>  
  )
  };

export default App;
