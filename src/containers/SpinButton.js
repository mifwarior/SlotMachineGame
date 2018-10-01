import {connect} from 'react-redux';
import SpinButton from '../components/SpinButton';
import {Spin} from './../actions';

export default connect((state, props)=> state, (dispatch, props)=>{
  return {
    onClick: ()=>{
      dispatch(Spin());
    }
  }
})(SpinButton);
