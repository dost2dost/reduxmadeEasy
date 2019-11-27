import React, { Component } from 'react'
import {createStore} from 'redux'

export class myredux extends Component {
    render() {
const reducer=(state,action)=>{
    if(action.type === "Attack"){
        return action.payload;
    }
    if(action.type === "GreenAttack"){
        return action.payload;
    }
    
    return state;

}
const store=createStore(reducer,"Peace");

store.subscribe(()=>{
    console.log("This is Store from : ",store.getState());
})
store.dispatch({type:"Attack",payload:"Iron mann2"});

store.dispatch({type:"GreenAttack",payload:"Hulk man 2"});

        return (
            <div>
                <h1>ftest from here </h1>
            </div>
        )
    }
}

export default myredux
