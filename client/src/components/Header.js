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
     //  console.log(this.props.auth);
        return (
          //   <nav>
          //   <div classNameName="nav-wrapper">
          //     <Link to={this.props.auth ? "/surveys" : "/"} classNameName="left brand-logo">Vidzai</Link>
          //     <ul classNameName="right">
          //      {this.renderContent()}
          //     </ul>
          //   </div>
          // </nav>

          <div className="tt-header clearfix">
          <div className="container-fluid">
              <div className="col-sm-3 wow fadeInLeft">
                  <a className="logo" href="javascript:void(0)">
                      <img src="img/logo.png" alt=""/>>
                  </a>
              </div>
              <div className="col-sm-9">
                  <nav className="navbar navbar-default">
                      <div className="">
                          <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                  <span className="sr-only">Toggle navigation</span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
  
                          </div>
                          <div id="navbar" className="navbar-collapse collapse pull-right  wow fadeInRight" aria-expanded="false" style={{height: "1px"}}>
                              <ul className="nav navbar-nav">
                              <li key={4}><Link to="">You</Link></li>
                              <li key={5}><Link to="/customerstories">Customer Stories</Link></li>
                              <li key={6}><Link to="/agencies">Agencies</Link></li>
                              <li key={7}><Link to="">Work for Us!</Link></li>
                              <li key={8}><Link to="/aboutus">About Us</Link></li>
                              <li key={9}><Link to="/contactus/new">Contact Us</Link></li>
  
                              </ul>
  
                          </div>
                      </div>
                  </nav>
  
  
              </div>
  
  

          </div>
      </div>
  
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