import React from 'react'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'This is React Component'
    }

    // this.setNewTitle = this.setNewTitle.bind(this)
    this.setNewTitle = (event) => {
      this.setState({
        title: event.target.value || 'This is React Component'
      })
    }
  }

  render () {
    return (
      <div>
        <h1>{ this.state.title }</h1>
        <div className="desc">{this.props.description}</div>

        <label className="test-input">
          <h2>Type new title</h2>
          <input type="text" onInput={this.setNewTitle} />
        </label>
      </div>
    )
  }
}

export default Page
