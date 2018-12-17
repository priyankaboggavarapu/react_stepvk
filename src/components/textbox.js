import React, {Component} from  'react';

class TextBox extends Component {
    constructor(){
        super();
        this.handleKeypress = this.handleKeypress.bind(this);
    }
    handleKeypress(e){
        //let  reg = /^\d+$/;
        let exp = new RegExp(this.props.regex);
         if(!exp.test(e.key)){
             e.preventDefault();
         }
    }
    render(){
        return (
           <input type="text" 
           className="form-control" 
           onKeyPress={this.handleKeypress}>
           </input>
        )            
    }
}

export default TextBox;