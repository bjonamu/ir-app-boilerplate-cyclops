import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import reduxStore from 'store';
import PrimaryLayout from 'layouts/primary-layout';

import ThemeContext, { ThemeConsumer } from 'services/theme-context';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global-styles';
import * as themes from 'styles/themes';

const { persistor, store } = reduxStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={onBeforeLift}
          loading={<h3>Loading...</h3>}
        >
          <ThemeContext>
            <BrowserRouter>
              <ThemeConsumer>
                {({ theme }) => (
                  <ThemeProvider theme={themes[theme]}>
                    <Fragment>
                      <PrimaryLayout />
                      <GlobalStyles />
                    </Fragment>
                  </ThemeProvider>
                )}
              </ThemeConsumer>
            </BrowserRouter>
          </ThemeContext>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
