import React,{ Component} from 'react';

export class LifeCycleB extends Component {
  // Making Constructor
  constructor(props) {
    super(props)
        this.state = {
            name: 'Pankaj'
        }
        console.log('LifeCycleB Constructor');
    }
    // GetDerived Methods
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    } 

    // Component Did Mount
    componentDidMount() {
        console.log('LifeCycleB componentDidMount');
    }
      // Should Component Update(Update)
      shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    // Get snapshot before update (Update)
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
       
    }B
    // Component Did update (Update)
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate');
    }
    
    // Rendering the method
    render(){
        console.log('LifeCycleB render');
        return (
            <div className="h1">
                Pankaj
            </div>
            
        )
      
    }
}