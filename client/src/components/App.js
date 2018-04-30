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
import CustomerStories1 from './CustomerStories1';
import Agencies from './Agencies';
import You from './You';
import Footer from './Footer';
import Workforus from './Workforus';
import CustomerVideo from './CustomerVideo';







class  App extends Component {
  componentDidMount(){
 //   this.props.fetchUser();
}

  render(){
  return (
      <div>
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
           <Route path="/customerstories1" component={CustomerStories1} />
           <Route path="/agencies" component={Agencies} />
           <Route path="/you" component={You} />
           <Route path="/workforus" component={Workforus} />
           <Route path="/customervideo" component={CustomerVideo} />
           
           <Footer />
        </div>
        </BrowserRouter>  
      </div>
      );
  }
}

export default connect(null, actions)( App);