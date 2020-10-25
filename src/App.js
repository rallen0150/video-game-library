import React, { Component } from "react";
// import axios from "axios";
import Search from './components/Search';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import VideogameDetail from './components/Videogame';

// import { search } from "./utils";
// import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <div>
        
        <p>
          Need to add in Homepage Component with look of multiple info on the page
            - maybe include top 10 of each platform or top 10 trending (if in api)
          <Search />  
        </p>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Homepage} /> */}
            <Route path='/videogame/:id' component={VideogameDetail} />
            {/* <Route component={Page404} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
