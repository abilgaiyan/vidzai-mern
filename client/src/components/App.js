import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';


const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2> ;

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
           <Route exact={true} path="/surveys" components={DashBoard} />
           <Route path="/surveys/new" components={SurveyNew} />
        </div>
        </BrowserRouter>  
      </div>
      );
  }
}

export default connect(null, actions)( App);