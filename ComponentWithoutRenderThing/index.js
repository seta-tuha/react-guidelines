// Should not use this.renderThing()
// Write SubComponent for more reusability
import SubComponent from './SubComponent'
import AnotherSubComponent from './AnotherSubComponent'

export default class ComponentWithRenderThing extends React.Component {

  render() {
    return (
      <div>
        {
          someCondition ? <SubComponent /> : <AnotherSubComponent />
        }
      </div>
    )
  }
}
