// UncontrolledInput is a component that has it own value and onChange function
// It can be use in a standalone component, can not be used in composition

export default class UncontrolledInput extends React.Component {
  state = {
    value: ''
  }

  handleOnChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    const { value } = this.state;
    return (
      <div>
        <label>Uncontrolled input</label>
        <input type="text" value={value} onChange={this.handleOnChange} />
      </div>
    )
  }
}
