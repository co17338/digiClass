import { createStore } from '@reduxjs/toolkit'
import rootred from './main';

const store = createStore(
    rootred, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);
export default store;
