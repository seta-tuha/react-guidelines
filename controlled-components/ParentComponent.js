import ControlledInput from './ControlledInput';

//ControlledInput can be use in composition with another component inside the same parent component
//Note that we will very hard or not able to use UncontrolledInputComponent in this case

export default class ParentComponent extends React.Component {
  state = {
    inputValue: ''
  }

  handleOnchange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleUpdating = (value) => {
    this.setState({
      inputValue: value
    })
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <ControlledInput value={inputValue} onChange={this.handleOnchange} />
        {/* UsingInputValue component can use inputValue as a prop */}
        <UsingInputValue someProp={inputValue} />
        {/* UpdatingInputValue component can change inputValue, eg: a button that clear value */}
        <UpdatingInputValue onUpdate={handleUpdating} />
      </div>
    )
  }
}