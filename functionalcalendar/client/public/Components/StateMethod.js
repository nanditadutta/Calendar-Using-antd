import React,{Component} from 'react'

export  class StateMethod extends Component {

    constructor(props){
        super(props)
        this.state = {
            message : 'Hello visitor',
            role : 'SuperHero',
            count : 0
        }
    }

    changeName(){
        this.setState({
            message: 'Hello Pankaj',
            role :'Superman',
            
        })
    }
    changeCount(){
        // this.setState({
        //     count: this.state.count + 1
        // },() => {
        //     console.log(this.state.count);
        // })
     // we can use props with prevState as an argument and the value can be taken by the props
        this.setState((prevState)=>({ 
            count:prevState.count + 2
        }),() => {
            console.log(this.state.count);
        })
    }

    changeCountFive(){
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
        this.changeCount();
    }

    render(){
        return(
            <div className='h2 text-center  ' style={{color:"yellow",backgroundColor: "lightblue" }}>
              {this.state.message} is a {this.state.role} count value {this.state.count}<br/>
              <button className='btn btn-success 'onClick={() => this.changeName()}>Change Name</button><br/>
              <button className='btn btn-success'onClick={() => this.changeCountFive()}>Change Count</button>
            </div>
        )
    }
}