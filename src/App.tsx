import React from 'react';
import Info from './Components/Info';
import Counter from './Components/Counter';
import Image from './Components/Image';
import './App.css';
import { isConstructorDeclaration } from 'typescript';

interface IState {
    counter : number;
}     

class App extends React.Component <{}, IState>{
    incrementCounter: any;

    render() {  
        
        
        this.state = {
            counter : 0,
        }

        const incrementCounter = () => {
            const { counter } = this.state;
            this.setState({ counter: counter + 1})
        }

        const renderImage = () => {
            const { counter } = this.state;
            if (counter%3 === 0 && counter !== 0){
                return <Image/>
            }
        }

        return(
            <div className='app-wrapper'>
                <Info Nama="Ellycia" Kelas="XC" isMorning={true}/>
                <Counter counter={this.state.counter} handleAppState={this.incrementCounter}/>
                {this.renderImage()}
            </div>
        )
    }
    renderImage(): React.ReactNode {
        throw new Error('Method not implemented.');
    }
}   

export default App; 


// interface IState {
//     nama: string;
//     umur : number;
//     kelaspagi : string;
// }

// class App extends React.Component<any, IState> {
//     constructor(props: any){
//         super(props);
        
//         this.state = {
//             nama : 'elly',
//             umur : 16,
//             kelaspagi : 'true',
//         }
//     }
    
//     render() {
//         const {nama, umur, kelaspagi} = this.state;
//         return (
//             <div>
//                 <h1>{nama}</h1>
//                 <h2>{umur}</h2>
//                 <h2>{kelaspagi}</h2>
//             </div>
//         )
//     }
// }
    
 //nama ini harus sama dgn class


 //NOTES
 //cari cara tengahin contents