import React, { Component } from "react";
// import axios from "axios";
import Search from './components/search/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideogameDetail from './components/games/Videogame';
import PlatformDetail from './components/platforms/Platform';
import GenreDetail from './components/genres/Genre';
import PublisherDetail from './components/publishers/Publisher';
import HomepageDetail from './components/homepage/Homepage'
import { Container, Row, Col } from 'react-bootstrap'

// import { search } from "./utils";
// import Movies from "./Movies";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p style={{ float: 'right' }}>
              <Search />  
            </p>
          </Col>
        </Row>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomepageDetail} />
            <Route path='/games/:id' component={VideogameDetail} />
            <Route path='/platforms/:id' component={PlatformDetail} />
            <Route path='/genres/:id' component={GenreDetail} />
            <Route path='/publishers/:id' component={PublisherDetail} />
            {/* <Route component={Page404} /> */}
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
