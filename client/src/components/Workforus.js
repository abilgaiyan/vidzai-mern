import React from 'react';
import {Link} from 'react-router-dom';

const Agencies = () => {
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
<h3>Creativity + Technology + Go To Market
 </h3>
<h1>We are awesome and <br /> therefore need You</h1>
</div>
<div className="col-sm-7 col-xs-12 youright Agency"><p>

We have openings for full time and part time associates in the field of Creativity, Technology and Go To Market space. 

</p>
<p>

We are looking for someone with a passion for video making. If you are someone with a flair for storyboarding, creating illustrations, 2D and 3D animation, conduct live shoots or anything creative in between, do contact us. 

</p>
<p>
If your calling is in cutting edge technology in Java script, Node, vector graphics or simply html and css, we need you. We are constantly adding new features to our product offering and making it more scalable.
</p>
<p>
If you think you can sell and creativity + technology platform appeals to your taste-buds, do contact us. Opportunities in Sales and Account management with us, will add 7 stars to your profile.
    </p>




<Link className="c-btn size-2 wow fadeInUp marginTop15" to="/contactus/new">Contact Us</Link>
</div>
</div>
       </div>
      );
    };
    
    export default Agencies;
       