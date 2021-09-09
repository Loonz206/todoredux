import React from "react";
import PropTypes from "prop-types";

const AddTodoForm = ({ onSubmit }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddTodoForm;
