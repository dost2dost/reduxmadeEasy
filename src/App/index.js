import React, { Component } from 'react';
import { createStore } from 'redux';


export class App extends Component {

  render() {
   // reducer is agent which take actions and update the state 
    const reducer=(state,action) =>{
      if(action.type === "ATTACK"){
        return action.payload
      }
      if(action.type === "GREENATTACK"){
        return action.payload
      }
      return state;

    };

     //create stor param: reducer,state
    const store=createStore(reducer,"peace");
    //stp3: susbscriber 
    store.subscribe(()=>{
      console.log("store is now ",store.getState());
    })
    //4 Dispatch actions
    store.dispatch({type:"ATTACK",payload:"Iron man"});
    store.dispatch({type:"GREENATTACK",payload:"Hulk"});

    return (
      <div>
        <h1>test for </h1>
      </div>
    )
  }
}

export default App
