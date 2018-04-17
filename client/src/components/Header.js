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
        <li key={4}><Link to="">You</Link></li>,
        <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
        <li key={6}><Link to="">Agencies</Link></li>,
        <li key={7}><Link to="">Work for Us!</Link></li>,
        <li key={8}><Link to="/aboutus">About Us</Link></li>,
        <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
        // <li><a href="/auth/google">Login With Google</a></li>
        ]
        case false:
         // return <li><a href="/auth/google">Login With Google</a></li>   
         return[
          <li key={4}><Link to="">You</Link></li>,
          <li key={5}><Link to="/customerstories">Customer Stories</Link></li>,
          <li key={6}><Link to="">Agencies</Link></li>,
          <li key={7}><Link to="">Work for Us!</Link></li>,
          <li key={8}><Link to="/aboutus">About Us</Link></li>,
          <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
          // <li><a href="/auth/google">Login With Google</a></li>
         ]
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