import { createStore, combineReducers } from 'redux';
import restaurantReducer from '../reducers/restaurant-reducer';

const rootReducer = combineReducers({
    restaurantReducer: restaurantReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;