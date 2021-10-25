import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ReviewList from './components/ReviewList';

function App() {
  return (
<BrowserRouter>
      <div className="App">
       {/* header */}
       <Switch>
        <Route exact path="/">
          <ReviewList />
        </Route>
        <Route exact path="writereview">
           
        </Route>
        
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
