import React,{ Component} from 'react';
import {LifeCycleB} from './LifeCycleB';

export class LifeCycleA extends Component {
  // Making Constructor
  constructor(props) {
    super(props)
        this.state = {
            name: 'Pankaj'
        }
        console.log('LifeCycleA Constructor');
    }
    // GetDerived Methods
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    } 

    // Component Did Mount
    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }
    
    // Should Component Update(Update)
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    // Get snapshot before update (Update)
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
       return null;
    }

    // Component Did update (Update)
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }
    changeState = () => {
        this.setState({
            name : 'changeState',
        })
    }
    // Rendering the method
    render(){
        console.log('LifeCycleA render');
        return (
            <div className="h1">
                < LifeCycleB />
                <button className='btn btn-primary' onClick={this.changeState}>Change</button>
            </div>
            
        )
      
    }
   
    
}