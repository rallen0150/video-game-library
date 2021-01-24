import React, { Component } from "react";
// import axios from "axios";
import Search from './components/Search';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import VideogameDetail from './components/games/Videogame';
import PlatformDetail from './components/platforms/Platform';
import GenreDetail from './components/genres/Genre';
import PublisherDetail from './components/publishers/Publisher';

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
            <Route path='/games/:id' component={VideogameDetail} />
            <Route path='/platforms/:id' component={PlatformDetail} />
            <Route path='/genres/:id' component={GenreDetail} />
            <Route path='/publishers/:id' component={PublisherDetail} />
            {/* <Route component={Page404} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
