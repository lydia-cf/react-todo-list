import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid'; //For the creation of RFC4122 UUIDs
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false
  };
  
  //structure for the methods to passing them down
  //when changing content of the input in the form
  handleChange = (e) => {
    //console.log("handle change");
    this.setState({
      item: e.target.value
    }, () => console.log(this.state.item))
  }

  //submitting the form
  handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    //we have to add the id and the item (text) from the state and add it to the items array in the state
    const newItem = {
      id: this.state.id,
      tittle: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: "",
      editItem: false
    })
  }

  //click in the button to clear the list
  clearList = () => {
    console.log("clear list");
    this.setState({
      items: []
    })
  }

  //when clicking in the edit icon in an existing item
  handleEdit = (idToEdit) => {
    console.log("handle edit", idToEdit);
    const filteredItems = this.state.items.filter(item => item.id !== idToEdit); //returning the array
    const selectedItem = this.state.items.find(item => item.id ===idToEdit); //returning 1
    console.log(selectedItem.id);
    this.setState({
      items: filteredItems,
      item: selectedItem.tittle,
      id: selectedItem.id,
      editItem: true
    })
  }

  //when clicking in the edit icon in an existing item
  handleDelete = (idToDelete) => {
    console.log("handle edit", idToDelete);
    //we use the filter method 
    //we'll display only the items that don't have the id passed
    const filteredItems = this.state.items.filter(item => item.id !== idToDelete);
    this.setState({
      items: filteredItems
    })
  }

  /*RENDER*/
  render (){
    //console.log(this.state);
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
    );
  };
}

export default App;
