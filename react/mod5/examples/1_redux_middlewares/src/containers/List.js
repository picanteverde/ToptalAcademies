import { connect } from 'react-redux';
import List from '../screens/List';
import { del } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (idx) =>{
      dispatch(del(idx));
    }
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
