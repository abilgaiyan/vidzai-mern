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
                <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="tt-page">

                            <div className="resp-container">
                                {/* <iframe className="resp-iframe" title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => this.ifr = f } src="" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                {renderhtml5video("Sukino.mp4","/poster/sukino.jpg")}
                            </div>
                            <div className="tt-page-rating">
                                <div className="tt-page-title test-author">A Home Care Story</div>
                            </div>

                        </div>
                    </div>

                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="800ms">
                        <div className="tt-page">

                            <div className="resp-container">
                                {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/SmartHospital.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                {renderhtml5video("Retail.mp4","/poster/Retail.jpg")}
                            </div>
                            <div className="tt-page-rating">
                                <div className="tt-page-title test-author">A Retail Buyer’s Story</div>

                            </div>

                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="1000ms">
                        <div className="tt-page">

                            <div className="resp-container">
                                {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/Retail.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                {renderhtml5video("RecruitmentStory.mp4","/poster/RecruitmentStory.jpg")}

                            </div>
                            <div className="tt-page-rating">
                                <div className="tt-page-title test-author">A Recruitment Story</div>

                            </div>

                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="400ms">
                        <div className="tt-page">

                            <div className="resp-container">
                                {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/DPS_Akbar.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                {renderhtml5video("DPS_Akbar.mp4","/poster/DPS_Akbar.jpg")}

                            </div>
                            <div className="tt-page-rating">
                                <div className="tt-page-title test-author">An Event Invitation Story</div>

                            </div>

                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="600ms">
                        <div className="tt-page">

                            <div className="resp-container">
                                {/* <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/SmartHospital.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe> */}
                                {renderhtml5video("SmartHospital.mp4","/poster/SmartHospital.jpg")}

                            </div>
                            <div className="tt-page-rating">
                                <div className="tt-page-title test-author">A Patient Story</div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CustomerStories1;
