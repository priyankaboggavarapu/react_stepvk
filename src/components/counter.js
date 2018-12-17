import React, {Component} from  'react';

class Counter extends Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.props.incrementCount();
    }
    decrement(){    
        this.props.decrementCount();
    }
    render(){
        return (

            <div className=" container">
            <br/> <br/>
            <div className="row">
              <div className="col-md-1"><button className="btn btn-primary" 
              onClick={this.decrement}>Remove</button></div>

                   <div className="col-md-1"> '
                        <span className="badge badge-warning">
                        {this.props.count}</span>
                   </div>

                    <div className="col-md-1">
                        <button className="btn btn-primary"
                        onClick={this.increment}>Add</button>
                    </div>
              </div>
              </div>
        )
            
        
    }
}

export default Counter;