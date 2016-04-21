import { connect } from 'react-redux';
import Edit from '../screens/Edit';
import { edit } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (idx, person) =>{
      dispatch(edit(idx, person));
    }
  };
};

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);

export default EditContainer;
