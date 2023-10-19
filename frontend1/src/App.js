import Header from './componets/Header'
import { Container } from 'react-bootstrap'
const App = () => {
  return(
    <>
      <Header/>
      <main className='py-3'>
      <Container>
      <h1>Wecome to ProShop</h1>
      </Container>
      </main>
    </>  
  )
  };

export default App;
