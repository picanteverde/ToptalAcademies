import { connect } from 'react-redux';
import Add from '../screens/Add';
import { fetch } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (person) =>{
      dispatch(fetch('add', person));
    }
  };
};

const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);

export default AddContainer;
