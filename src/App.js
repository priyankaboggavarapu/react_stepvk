import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Counter from './components/counter';
import TextBox from './components/textbox';
import Products from './components/products';
import Login from  './components/login';
import Home from  './components/home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

class App extends Component {
   constructor(){
      super();
      
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.configureHeader = {
          companyName:'All State'
      }
      this.configureFooter ={
        footerData:["About us", 
        "Contact Us", "Site Map",
        "All State Blog",
        "Careers",
        "All State Investments"]
      };
      this.numbersOnlyRegex =/^\d+$/;
      this.alphabetsOnlyRegex =/^[a-zA-Z]+$/;
      this.state ={Counter:0,cartItems:[]}
      this.addItemToCart = this.addItemToCart.bind(this);
   }
   increment(){
    let counter = this.state.Counter;
    
    this.setState({Counter:counter+1})
   // alert("Increment");
   }
    decrement(){    
        
        let counter = this.state.Counter;
        this.setState({Counter:counter-1})
        //alert("Decrement");
    }   
    addItemToCart(item){
      console.log(item);
      let items = this.state.cartItems;
      items.push(item);
      this.setState({cartItems:items});
    
    }
  render() {

    return (
      <div className ="container">
        <NavBar title={this.configureHeader.companyName}
         cartItems={this.state.cartItems} 
         />
         <Router>
        <div className="container addMargin">
        <Switch>
        <Route exact path ="/" component = {Home}/>
        <Route exact path ="/Login" component = {Login}/>
        <Route exact path ="/Products" component = {Products} addItemToCart={this.addItemToCart} />
        </Switch>
        {/* <div className="row addMargin"  >
          <Products addItemToCart={this.addItemToCart}  />
        </div> */}
        </div>
        </Router>
      </div>
    );
    // return (
    //   <div className="App container" >
    //     <NavBar  title={this.configureHeader.companyName} />
         
    //       <TextBox regex = {this.numbersOnlyRegex}/>
          
    //       <TextBox regex = {this.alphabetsOnlyRegex}/>
    //       <Counter incrementCount={this.increment} 
    //       decrementCount={this.decrement} 
    //       count={this.state.Counter} />
    //     <Footer  
    //     footerItems =
    //      {this.configureFooter.footerData}
    //       />
    //   </div>
     
    // );
  }
}

export default App;
