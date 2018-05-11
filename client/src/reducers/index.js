import { combineReducers }  from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducers';
import surveyReducer from './surveyReducers';
import contactusReducer from './contactusReducers';
import storiesReducer from './storyReducer';

export default combineReducers({
  auth : authReducer,
  form: reduxForm,
  surveys: surveyReducer,
  contactusForm: reduxForm,
  stories: storiesReducer,
  contactus: contactusReducer
});