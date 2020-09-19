import React, {Component} from 'react';
import ChildComp from './Demos/Demo1_ChildComp';
import PropsComp from './Demos/Demo2_Props';
import PersonsComp from './Demos/Persons';
import AddNumberComp from './Demos/AddNumber';
import Swicharu from './Demos/Swicharu';

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <h1>from the main component</h1>

        <ChildComp />
        <PersonsComp />
        <AddNumberComp />
        <Swicharu />



      </div>
    );
  }
}

export default App;
