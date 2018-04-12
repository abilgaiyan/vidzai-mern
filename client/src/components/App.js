import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Aboutus from './Aboutus';
import Contactus from './Contactus';




class  App extends Component {
  componentDidMount(){
    this.props.fetchUser();
}

  render(){
  return (
      <div className="container">
        <BrowserRouter>
        <div>
            <Header />
           <Route exact={true} path="/" component={Landing} /> 
           <Route exact={true} path="/surveys" component={Dashboard} />
           <Route path="/surveys/new" component={SurveyNew} />
           <Route path="/aboutus" component={Aboutus} />
           <Route path="/contactus" component={Contactus} />
        </div>
        </BrowserRouter>  
      </div>
      );
  }
}

export default connect(null, actions)( App);