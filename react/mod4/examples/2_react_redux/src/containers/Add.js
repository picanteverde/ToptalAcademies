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
      dispatch(add(person));
    }
  };
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;
