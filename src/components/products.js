import React, { Component } from 'react';
import Axios from 'axios';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { Products: [] };
        this.addItemToCart = this.addItemToCart.bind(this);
    }
    addItemToCart(x) {
        console.log(x);
        this.props.addItemToCart(x);
    }

    componentDidMount() {
        Axios.get('http://localhost:4000/api/search/iphone')
            .then(result => {
                console.log(result);
                this.setState({ Products: result.data.data });
            }).catch(err => {
                console.log(err);
            })  
    }

    componentDidUpdate() {
        console.log('Component Updated');
    }

    render() {
        return (
            <div className="row">
                {this.state.Products.map(x => {
                    return <div className="card" >
                        <img className="card-img-top imgStyle" src={x.thumbnailImage} alt="Card image"></img>
                        <div className="card-body">
                            <h4 className="card-title">{x.name}</h4>
                            <p className="card-text">{x.shortDescription}</p>
                            <button className="btn btn-primary" onClick={() => { this.addItemToCart(x) }}>
                                {x.salePrice}
                            </button>
                        </div>
                    </div>
                })}
            </div>
        );
    }
}



export default Products