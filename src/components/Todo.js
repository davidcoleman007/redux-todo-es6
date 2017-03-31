import React from 'react';

export default class Todo extends React.Component {
  constructor(onClick, completed, text) {
    super();
  }

  render() {
    console.log('render');
    return (
      <li onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
          >
        {this.props.text}
      </li>
    );
  }
}
