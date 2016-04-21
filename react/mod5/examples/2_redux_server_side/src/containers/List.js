import { connect } from 'react-redux';
import List from '../screens/List';
import { fetch } from '../actions/persons';

const mapStateToProps = (state) => {
  return {
    persons: state.persons.list,
    error: state.persons.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDel: (idx) =>{
      dispatch(fetch('del',{
        idx
      }));
    },
    onInit: () =>{
      dispatch(fetch('list'));
    }
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
