// const styles = StyleSheet.create({
//   boldedFont: {
//     fontWeight: 'bold'
//   }
// })


class GroceryItem extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      done: false
    }
  }

  onItemClick () {
    this.setState({done: !this.state.done})
  }

  onMouseOver () {
    console.log(this.state.condition);
  }

  render () {
    var style = {
      color: this.state.done ? 'green' : 'red',
      padding: '10px',
      border: '1px solid #000',
      cursor: 'pointer',
      fontWeight: 'normal'
    };

    return (
      <li style={style} onClick={this.onItemClick.bind(this)} onMouseOver={this.onMouseOver.bind(this)}>
        {this.props.item}
      </li>
    );
  }

}


// TODO
var GroceryList = (props) => (
  <ul>
    {props.stuff.map(item =>
      <GroceryItem item={item}/>
    )}
  </ul>
);



ReactDOM.render(<GroceryList stuff={['grapes', 'tomatoes']}/>, document.getElementById('app'));
