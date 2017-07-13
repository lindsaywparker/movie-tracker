import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import { makeUserCall } from '../../actions/users';

const mapDispatchToProps = (dispatch) => {
  return {
    handleAuthentication: (state) => {
      dispatch(makeUserCall(state));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
