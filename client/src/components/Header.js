import React, { Component } from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import {Link} from 'react-router-dom';

class Header extends  Component {
    renderContent(){
      <div class="tt-header clearfix">
      <div class="container-fluid">
          <div class="col-sm-3 wow fadeInLeft">
              <a class="logo" href="javascript:void(0)">
                  <img src="img/logo.png" alt=""/>
              </a>
          </div>
          <div class="col-sm-9">
              <nav class="navbar navbar-default">
                  <div class="">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>

                      </div>
                      <div id="navbar" class="navbar-collapse collapse pull-right  wow fadeInRight" aria-expanded="false" style="height: 1px;">
                          <ul class="nav navbar-nav">
                              <li><a href="#">You </a></li>
                              <li>
                                  <a href="#CustomerStories">
                                      Customer Stories
                                  </a>
                              </li>
                              <li><a href="#Agency">Agency</a></li>
                              <li>
                                  <a href="#WorkforUs">
                                      Work for Us!
                                  </a>
                              </li>

                          </ul>

                      </div>
                  </div>
              </nav>


          </div>


          
      </div>
  </div>

    } 
    render(){
       //console.log(this.props.auth);
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