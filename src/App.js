import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import ReviewList from './components/ReviewList';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
