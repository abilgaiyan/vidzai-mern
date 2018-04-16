import React , { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class ContactusNew extends Component {

    state = {showFormReview: false};

    renderContents(){
        if (this.state.showFormReview){
            return (<ContactusFormReview onCancel = {()=> this.setState({showFormReview: false})} />)
        }
        
        return (<ContactusForm  onContactusSubmit = {()=> this.setState({showFormReview: true })} />) 

    }

    render(){
        return (
            <div>
                {this.renderContents()}
            </div>
        );
    }
}

export default ContactusNew;