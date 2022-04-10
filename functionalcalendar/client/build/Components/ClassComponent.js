import React,{ Component} from 'react';

export class ClassComponent extends Component {
    render() {
        return (
        <div className='h2 text-center '> Hello {this.props.name} Styles Like {this.props.nickname}
        {this.props.children}
        </div>
        )
        
        };
}