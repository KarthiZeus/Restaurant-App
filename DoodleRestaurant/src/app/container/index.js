import React, {Component} from 'react';
import { Provider } from 'react-redux';
import StackNavigator from '../navigation/stacknavigation'
import configureStore from '../store/store';
const store = configureStore()

export default class App extends Component {
  constructor(props) {
    super(props)
    // ...
  }


  render() {
    return (
      <Provider store={ store }>
        <StackNavigator/>
      </Provider>
    );
  }
}