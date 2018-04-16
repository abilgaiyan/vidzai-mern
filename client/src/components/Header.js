import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import {Link} from 'react-router-dom';

class Header extends  Component {
    renderContent(){
      console.log(this.props.auth);
      switch (this.props.auth) {
        case null:
        return[
        <li key={4}><a href="#">You</a></li>,
        <li key={5}><a href="#">Customer Stories</a></li>,
        <li key={6}><a href="#">Agencies</a></li>,
        <li key={7}><a href="#">Work for Us!</a></li>,
        <li key={8}><a href="/aboutus">About Us</a></li>,
        <li key={9}><a href="/contactus">Contact Us</a></li>,
        <li><a href="/auth/google">Login With Google</a></li>]
        case false:
         // return <li><a href="/auth/google">Login With Google</a></li>   
         return[
          <li key={14}><a href="#">You</a></li>,
          <li key={15}><a href="#">Customer Stories</a></li>,
          <li key={16}><a href="#">Agencies</a></li>,
          <li key={17}><a href="#">Work for Us!</a></li>,
          <li key={18}><a href="/aboutus">About Us</a></li>,
          <li key={19}><a href="/contactus">Contact Us</a></li>,
          <li><a href="/auth/google">Login With Google</a></li>]
        default:
         return [
          <li key={1}><Payments /></li>,
          <li key={3} style={{margin: '0 10px'}}>
             Credits: {this.props.auth.credits}
          </li>, 
          <li key={2}><a href="/api/logout">Logout</a></li>,
         
         ]
      }
    } 
    render(){
       console.log(this.props.auth);
        return (
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">Vidzai</Link>
              <ul className="right">
               {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }

}

// function mapStateToProps(state){
//   return { auth: state.auth};
// }
function mapStateToProps({auth}){
  return { auth };
}


export default connect(mapStateToProps)( Header);