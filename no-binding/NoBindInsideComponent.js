const TODO_LIST = [
  'Writing react-guidlines',
  'Get comments',
  'Updating react-guidlines',
]

class BindInsideComponent extends React.Component {
  onClickItem = (event) => {
    console.log('Click on item:', event.target.getAttribute("data-id"));
  }
  // data-id is passing to legacy component props
  render() {
    return (
      <ul>
        {
          TODO_LIST.map((todoItem, index) => (
            <li key={index} onClick={this.onClickItem} data-id="index" >{{ todoItem }}</li>
          ))
        }
      </ul>
    )
  }
}
