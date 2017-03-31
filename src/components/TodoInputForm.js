import * as React from 'react';

let input;

export default class TodoInputForm extends React.Component {
  submit() {
    if (!input.value.trim()) {
      return
    }
    this.props.addTodo(input.value);
    input.value = ''
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <span>num todos: {this.props.todos.length}</span>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.submit();
          }}>
          <input ref={node => {
            input = node
          }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
