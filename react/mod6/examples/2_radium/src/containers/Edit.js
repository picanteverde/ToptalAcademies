import { connect } from 'react-redux';
import Edit from '../screens/Edit';
import { fetch } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (idx, person) =>{
      person.idx = idx;
      dispatch(fetch('edit', person));
    }
  };
};

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
