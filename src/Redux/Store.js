import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';

import reducer from './Reducer'

const store = createStore(reducer)
export default store