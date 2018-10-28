import React from 'react'

class Page extends React.Component {
  render () {
    return (
      <div>
        <h1>This is React Component</h1>
        <div className="desc">{this.props.description}</div>
      </div>
    )
  }
}

export default Page
