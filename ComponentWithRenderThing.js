// Example of an anti-pattern with renderThing

export default class ComponentWithRenderThing extends React.Component {
  renderThing() {
    if(someCondition) {
      return (
        <div>
          // render a sub component
        </div>
      )
    }
    return (
      <div>
        // render another sub component
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderThing() }
      </div>
    )
  }
}
