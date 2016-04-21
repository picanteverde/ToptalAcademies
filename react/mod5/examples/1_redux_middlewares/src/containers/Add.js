import { connect } from 'react-redux';
import Add from '../screens/Add';
import { add } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (person) =>{
      let action = add(person);
      //console.log('dispatching :', action);
      dispatch(action);
      //console.log('dispatched :', action);
    }
  };
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;
