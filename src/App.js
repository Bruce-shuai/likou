import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Submission from './pages/submission';
import Discussion from './pages/discussion';
import Header from './header';
import { BrowserRouter, Route } from 'react-router-dom';
// import { Background } from './style';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            {/* <Route path='/' exact component={Header}></Route> */}
            <Route path='/submission' exact component={Submission}></Route>
            <Route path='/discussion' exact component={Discussion}></Route>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;