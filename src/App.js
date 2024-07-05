
import './App.css';
import Balls from './Balls';

import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';
import Reviews from './Reviews';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <div className="main">
      <div className="bodyBalls">
        <div className='body'><Body/></div>
        <div className='Balls'><Balls/></div>
      </div>
      
      <div className='reviews'>
      <Reviews/>
      </div>
      </div>
      <Footer/>
      </div>
     
    
  );
}

export default App;
