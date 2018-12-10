const TODO_LIST = [
  'Writing react-guidlines',
  'Get comments',
  'Updating react-guidlines',
]

class BindInsideComponent extends React.Component {
  onClickItem = (id) => {
    console.log('Click on item:', id);
  }

  render() {
    return (
      <ul>
        {
          TODO_LIST.map((todoItem, index) => (
            <li key={index} onClick={() => this.onClickItem(index)} >{{ todoItem }}</li>
          ))
        }
      </ul>
    )
  }
}
