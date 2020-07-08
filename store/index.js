// remember when I said this is just a standard store
// this one is a little more advanced to show you
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../redux/reducers'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store;
