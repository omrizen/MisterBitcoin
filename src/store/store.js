import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducer , userReducer , bitcoinReducer} from './reducers';

const composeEnhancers = composeWithDevTools({
    // Specify custom devTools options
  });
const allReducers = combineReducers({
    contactsReducer,
    userReducer,
    bitcoinReducer
});

export default function configStore() {
    return createStore(
        allReducers,
        composeEnhancers(
        applyMiddleware(thunk)
        )
    );
}