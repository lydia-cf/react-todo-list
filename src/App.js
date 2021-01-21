import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid'; //For the creation of RFC4122 UUIDs
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items:[
      {
        id: 1,
        tittle:'wake up'
      },
      {
        id: 2,
        tittle:'make bfast'
      }
    ],
    id: uuidv4(),
    item: '',
    editItem: false
  };
  
  //structure for the methods to passing them down
  //when changing content of the input in the form
  handleChange = (e) => {
    console.log("handle change");
  }

  //submitting the form
  handleSubmit = (e) => {
    console.log("handle submit");
  }

  //click in the button to clear the list
  clearList = () => {
    console.log("clear list");
  }

  //when clicking in the edit icon in an existing item
  handleEdit = (id) => {
    console.log("handle edit", id);
  }

  //when clicking in the edit icon in an existing item
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  }

  /*RENDER*/
  render (){
    console.log(this.state);
    return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput item={this.state.name} 
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
