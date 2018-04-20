import React from 'react';
import {Link} from 'react-router-dom';

const CustomerStories = () => {
    return (
      <div>
      <div className="container-fluid wow fadeInUp">
         
         <div className="tt-banner">
             <div className="tt-banner-inner">
                 <div className="row">
                     <div className="col-sm-6">
                         <div className="tt-banner-info">
                             <h5 className="tt-banner-label"> <p>Personal Video engages customers</p> </h5>
                             <h1 className="tt-banner-title">Create an emotional experience for Customer Her name, her data, her story</h1>
                         </div>
                     </div>
                     {/* <div> Like what you see? Try it for yourself </div> */}
         <div className="col-sm-6">
                 <img className="tt-banner-img lazy" data-original="img/banner_01.png" alt="" src="img/banner_01.png" style={{display: "block"}} />
                 {/* <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p> */}
        {/* <ReactPlayer className="bannervideo"  url= {this.videolist[this.state.counter].videourl}
           onEnded={() => this.renderNextVideo(this.state.counter + 1)}  playing /> */}
       
       
     </div>
                 </div>
       
             </div>
         </div>
     </div>
     <div className="container-fluid wow fadeInUp marginTop40 marginBottom40">
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
     </div>
      );
    };
    
    export default CustomerStories;
       