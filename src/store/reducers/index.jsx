// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import HeaderTab from './tab';


// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu,  HeaderTab});

export default reducers;
