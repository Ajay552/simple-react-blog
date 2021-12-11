import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />  {/* can also be written as <Navbar></Navbar> insted of self closing tag */}
     <div className="content">
       <Switch>
         <Route exact path="/">
          <Home />
         </Route>
         <Route path="/create">
          <Create />
         </Route>
         <Route path="/blogs/:id">
          <BlogDetails />
         </Route>
         <Route path="*">  {/* catch any of the routs put it in bottom */}
           <PageNotFound />
         </Route>
       </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
