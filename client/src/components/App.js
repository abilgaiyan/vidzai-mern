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
import ContactusNew from './contactus/ContactusNew';
import CustomerStories from './CustomerStories';
import Agencies from './Agencies';




class  App extends Component {
  componentDidMount(){
 //   this.props.fetchUser();
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
           <Route path="/contactus/new" component={ContactusNew} />
           <Route path="/customerstories" component={CustomerStories} />
           <Route path="/agencies" component={Agencies} />
        </div>
        </BrowserRouter>  
      </div>
      );
  }
}

export default connect(null, actions)( App);