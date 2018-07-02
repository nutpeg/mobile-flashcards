import React from 'react';
import AppNav from './config/routes';
import store from './config/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  state = {};

  // Uncomment the following to clear asyncStorage
  // componentWillMount() {
  //   AsyncStorage.removeItem(KEY);
  // }

  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}
