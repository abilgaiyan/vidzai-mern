import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStories} from '../actions';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';



class CustomerStories  extends Component  {

    componentDidMount(){
        this.props.fetchStories();
    }   
    


    renderhtml5video(url,poster){
       
       // const videourl =process.env.VIDEO_URL + url;
       const videourl ='http://18.216.235.248:3000/api/videourl/' + url;
       // console.log(videourl);
        return (
                <Video autoPlay={false} 
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    poster={poster}
                    onCanPlayThrough={() => {
                        // Do stuff
                    }}>
                    <source src={videourl} type="video/webm" />
                    {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
                </Video>
            );
    }


    rendercustomerstory(story){
        
        const {id,name, heading, desctiption, videourl, posterurl} =  story;
        
        return(
           
            <div key={id}>
               
                 <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container1">
                                        {/* <iframe className="resp-iframe" title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => this.ifr = f } src="" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                        { this.renderhtml5video(videourl,posterurl)}
                                    </div>
                                    <div className="tt-text wow fadeInUp">
                                        <p><strong>{heading} </strong></p>
                                        <p>{desctiption}</p>

                                    </div>
                                </div>
                                <div className="tt-page-rating">
                                    <div className="tt-page-title test-author">{name}</div>

                                </div>
                           
                        </div>
                    </div>
            </div>
        )   
    }

    rendercustomerstories(){
        return(
            
            <div className="container-fluid">
                  <div className="isotope-content">
                     <div className="col-sm-12 flex">
                       {this.renderList()}  
                     </div>
                   </div>


            </div>        
        )
    }

    renderList(){
       return _.map(this.props.stories, (story) =>{
            return this.rendercustomerstory(story);  
       });
     }
     

    render(){
         return (
        <div>

            <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
                <div className="col-sm-5 col-xs-12 youleft">
                    <h3>Generating Results for Early Adopters</h3>
                    <h1>Getting personal with your   <br /> customer</h1>
                </div>
                <div className="col-sm-7 col-xs-12 youright Agency"><p>

                    Our customers are able to leverage the customer data and insights, by playing it back in a engaging manner that traditional communications never could.

</p>
                    <p>

                        Our applicability is across Healthcare, Education, Retail, Financial Services and other industries.


</p>
                    <p>

                        Our stories are pervasive across Event invitations, Lead conversion, Campaign Launches, Cross selling, Statements and Explainers


</p>


                </div>
            </div>

            <div className="container">

                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div className="tt-title">
                            {/* <div className="tt-title-count wow fadeInUp">Title</div>
                            <h3 className="tt-title-name wow fadeInUp">small text</h3> */}
                            <div className="tt-title-text wow fadeInUp">Our clients are our best assets, the greatest pride! <br />Hear what our customers have to say.</div>
                        </div>
                    </div>
                </div>
            </div>

             {this.rendercustomerstories()}

            <div className="col-sm-12 text-center marginTop10 marginBottom20 footerarrow">
                <p>Like what you see? Check these out and ask for one</p>
                <div className="arrow bounce marginTop20">
                    <Link to="/customerstories1"> <i className="fa fa-angle-double-down fa-3x"></i></Link>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>


    );
 };
}

function mapStateToProps({stories}){
    return { stories }
 }
 
 export default connect(mapStateToProps, {fetchStories}) (CustomerStories);

//export default CustomerStories;
