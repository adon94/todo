import { connect } from 'react-redux';
import ItemView from './ItemView';

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        // addTodo: (text) => { dispatch(addTodo(text)) }
    })
)(ItemView)