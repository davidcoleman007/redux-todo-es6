import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import {store} from '../store';
import { addTodo } from '../actions';
import TodoInputForm from './../components/TodoInputForm';

const mapStateToProps = function(state) {
  return {
    todos : store.getState().todos
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    ...bindActionCreators({addTodo},dispatch)
  };
}

let AddTodo = connect(mapStateToProps,mapDispatchToProps)(TodoInputForm);

export default AddTodo;
