import React from 'react'

export default class Link extends React.Component {
  constructor(active, children, onClick) {
    super();
  }
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>
    }

    return (
      <a href="#"
         onClick={e => {
           console.log('Link.onClick');
           e.preventDefault()
           this.props.onClick()
         }}
      >
        {this.props.children}
      </a>
    );
  }
}
