//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  );
}
function Header()
{
  return (
    <>
    <h1 className='bg-primary'>Header</h1>
    <h2 className='bg-info'>Header</h2>
    </>
  );
}

function Body()
{
  return (
    <>
    <h1 className='bg-dark text-light'>body</h1>
    </>
  );
}

function Footer()
{
  return (
    <>
    <h1 className='bg-primary text-light'>Footer</h1>
    </>
  );
}

export default App;
