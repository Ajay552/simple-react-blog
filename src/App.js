
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* can also be written as <Navbar></Navbar> insted of self closing tag */}
     <div className="content">
       <Home/>
     </div>
    </div>
  );
}

export default App;
