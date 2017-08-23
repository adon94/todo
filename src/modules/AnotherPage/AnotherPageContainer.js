import { connect } from 'react-redux';
import AnotherPage from './AnotherPage';
import { navigatePop } from '../../Redux/Navigation/NavigationState'
export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        return: () => dispatch(navigatePop(props))
    })
)(AnotherPage)