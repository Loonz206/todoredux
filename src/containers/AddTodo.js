import AddTodoForm from "../components/AddTodoForm";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text));
    },
  };
};

const AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;
