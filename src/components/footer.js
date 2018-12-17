import React, {Component} from  'react';

class Footer extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="container">
              <hr/>
              <div className="row">
              {
                  this.props.footerItems.map(item=>{
                  return <div className="col-md">
                  {item}
                  </div>
                 })
              }
                
              </div>
            </div>
        )
    }
}

export default Footer;