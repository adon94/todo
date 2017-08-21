import { connect } from 'react-redux';
import ItemView from './ItemView';
import { navigatePop } from '../../Redux/Navigation/NavigationState'

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        return: () => { dispatch(navigatePop(props)) }
    })
)(ItemView)