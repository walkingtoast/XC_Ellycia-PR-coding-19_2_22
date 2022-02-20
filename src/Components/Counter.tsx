import React from 'react';
import { isThisTypeNode } from 'typescript';

interface IProps {
    counter : number;
    handleAppState() : void;
}

class Counter extends React.Component<IProps> {
//    constructor(props: any){
//        super(props);

//        this.handleClick = this.handleClick.bind(this);
//    } -> gausa dipake klo sdh autobind
   
    state = {
       counter : 0,
   }

   
   handleClick = () => { //ditulis spt ini biar bisa mengakses obj state, sdh auto binding
    const { counter } = this.state
    this.setState({counter: counter + 1});
   }

   render() {
    const { counter } = this.state
    return (
        <>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.handleClick}>
        Click me</button>
         </>
        )
    }
    
}
    

export default Counter;