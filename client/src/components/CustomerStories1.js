import React from 'react';
//import { Link } from 'react-router-dom';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const renderhtml5video = (url,poster) =>{
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
const CustomerStories1 = () => {
    return (
        <div>

            <div className="container-fluid wow fadeInUp marginTop70 marginBottom40">
                <div className="col-sm-5 col-xs-12 youleft">
                    <h3>Creative to Mass production - 1 Team + 1 Platform </h3>
                    <h1>Your story, your touch,<br /> your way, with Vidzai</h1>
                </div>
                <div className="col-sm-7 col-xs-12 youright Agency">
                    <p>
                        Storyboarded, illustrated, animated by the Vidzai team. Mass produced by the Vidzai platform, our customer stories have a unique blend of expression, data and interactions.
                 </p>
                    <p>
                        You can become our Affiliate and use our platform to create these engaging stories for your customers. <br />
                        Earn payouts from Sale of Vidzai technology when you promote us.
                 </p>
                    <p>
                        We will handhold you through entire process right from training, Closing the sales and post sales support
                    </p>
                </div>
            </div>
            <div className="container-fluid">
            <div className="isotope-content">
                <div className="col-sm-12 flex">
           <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="200ms">
               <div className="tt-page">
                  
                       <div className="tt-page-testimonial text-center">
                           <div className="resp-container1">
                               {/* <iframe className="resp-iframe" title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => ifr = f } src="" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                               {renderhtml5video("Sukino.mp4","/poster/sukino.jpg")}
                           </div>
                           <div className="tt-text wow fadeInUp">
                               <p><strong>A Home Care Story </strong></p>
                               <p>Sukino – a Wellness service provider, used a personalized video to explain the Homecare services to its customers. Video stitches the dynamic customer and nurse information along with the information on Services</p>

                           </div>
                       </div>
                       <div className="tt-page-rating">
                           <div className="tt-page-title test-author">Sukino</div>

                       </div>
                  
               </div>
           </div>
           <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="800ms">
               <div className="tt-page">
                  
                       <div className="tt-page-testimonial text-center">
                           <div className="resp-container1">
                               {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/Retail.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                               {renderhtml5video("Retail.mp4","/poster/Retail.jpg")}
                           </div>
                           <div className="tt-text wow fadeInUp">
                               <p><strong> A Retail Buyer’s Story </strong></p>
                               <p> A Japanese firm*, uses Vidzai to leverage its customer buying information and the loyalty points to provide an unbeatable offer for next purchase. Rich visuals including dynamic images seals the deal. </p>

                           </div>
                       </div>
                       <div className="tt-page-rating">
                           <div className="tt-page-title test-author">Retail</div>

                       </div>
                  
               </div>
           </div>
           {/* <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="1000ms">
               <div className="tt-page">
                  
                       <div className="tt-page-testimonial text-center">
                           <div className="resp-container1">
                            
                               {renderhtml5video("RecruitmentStory.mp4","/poster/RecruitmentStory.jpg")}
                           </div>
                           <div className="tt-text wow fadeInUp">
                               <p><strong> A Recruitment Story </strong></p>
                               <p>A Japanese HR firm* specializing in Recruitment*, runs a AI engine that matches the demand with the candidate profiles. Vidzai could be used to distribute the recommendations to its customers (currently at a prototype stage)</p>

                           </div>
                       </div>
                       <div className="tt-page-rating">
                           <div className="tt-page-title test-author"> HR </div>
                       </div>                           
               </div>
           </div> */}
               <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="600ms">
               <div className="tt-page">
                  
                       <div className="tt-page-testimonial text-center">
                           <div className="resp-container1">
                               {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/SmartHospital.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                               {renderhtml5video("SmartHospital.mp4","/poster/SmartHospital.jpg")}
                           </div>
                           <div className="tt-text wow fadeInUp">
                               <p><strong> A Patient Story </strong></p>
                               <p>One of the Asia’s largest hospitals* – A front runner tech enabled institution, used Vidzai to generate Personalized video for their international patients to provide information on the medical process. Video aims to augment various stages of the customer journey for the hospital.</p>

                           </div>
                       </div>
                       <div className="tt-page-rating">
                           <div className="tt-page-title test-author">Smart Hospital </div>

                       </div>
                  
               </div>
           </div>
                </div>
                <div className="col-sm-12 flex">


           <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="400ms">
               <div className="tt-page">
                  
                       <div className="tt-page-testimonial text-center">
                           <div className="resp-container1">
                               {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/DPS_Akbar.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                               {renderhtml5video("DPS_Akbar.mp4","/poster/DPS_Akbar.jpg")}

                           </div>
                           <div className="tt-text wow fadeInUp">
                               <p><strong> An Event Invitation Story </strong></p>
                               <p>Delhi Public School used the Vidzai to generate Personalized video invitations for its Annual Day function. Personalization through Parent’s names coupled with the rich visuals created an engaging experience</p>

                           </div>
                       </div>
                       <div className="tt-page-rating">
                           <div className="tt-page-title test-author">DPS</div>

                       </div>
                  
               </div>
           </div>

       


          </div>
       </div>
   </div>
        </div>
    );
};

export default CustomerStories1;
