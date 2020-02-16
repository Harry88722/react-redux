import gameReducer from '../reducer/gameReducer';
import personReducer from '../reducer/personReducer';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import userReducer from '../reducer/userReducer';
import thunk from 'redux-thunk';



const AllReducers= combineReducers({game:gameReducer,person:personReducer,users:userReducer})
const InitialState={
    game:{name:'football'},
    person:{name:'sarthak'},
    users:[]
}

const middleware=[thunk]
const store = createStore(AllReducers,InitialState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    


export default store;