import React, { PureComponent } from 'react';
import Submission from './pages/submission';
import Discussion from './pages/discussion';
import Header from './header';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          {/* <Route path='/' exact component={Header}></Route> */}
          <Route path='/submission' exact component={Submission}></Route>
          <Route path='/discussion' exact component={Discussion}></Route>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;