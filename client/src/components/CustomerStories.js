import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CustomerStories  extends Component  {
    // componentDidMount(){
    //     console.log('componentDidMount' +  this.ifr.src);
    //     this.ifr.onload = () => {
    //     console.log('componentDidMount' +  this.ifr.src);
    //     if(this.ifr){
    //       this.ifr.src ="";   
    //       this.ifr.contentWindow.postMessage('hello', "*");
    //       this.ifr.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    //     }
    //     }
    //    }

       componentDidMount() {
        window.addEventListener("message", this.handleFrameTasks);
        }

        componentWillUnmount() {
        window.removeEventListener("message", this.handleFrameTasks);
        }

        handleFrameTasks = (e) => {
            console.log(e.data)
            console.log(this.ifr.src);
            if(this.ifr){
                this.ifr.src ="";   
                
            //  if(e.data.from.iframe === "hello") {
            //  this.ifr.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
            //  }

               this.ifr.src ="http://localhost:3000/api/videourl/Sukino.mp4";  
               this.ifr.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
               this.ifr.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
               this.ifr.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            }
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
                            <div className="tt-title-count wow fadeInUp">Title</div>
                            <h3 className="tt-title-name wow fadeInUp">small text</h3>
                            <div className="tt-title-text wow fadeInUp">Our clients are our best assets, the greatest pride! <br />Hear what our customers have to say.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="isotope-content">

                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        <iframe className="resp-iframe" title="Sukino" autoPlay="false" sandbox="allow-same-origin allow-scripts" ref={(f) => this.ifr = f } src="" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                    <div className="tt-text wow fadeInUp">
                                        <p><strong>A Home Care Story </strong></p>
                                        <p>Sukino – a Wellness service provider, used a personalized video to explain the Homecare services to its customers. Video stitches the dynamic customer and nurse information along with the information on Services</p>

                                    </div>
                                </div>
                                <div className="tt-page-rating">
                                    <div className="tt-page-title test-author">Sukino And You</div>

                                </div>
                           
                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="400ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/DPS_Akbar.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>

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
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="600ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/SmartHospital.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                    <div className="tt-text wow fadeInUp">
                                        <p><strong> A Patient Story </strong></p>
                                        <p>One of the Asia’s largest hospitals* – A front runner tech enabled institution, used Vidzai to generate Personalized video for their international patients to provide information on the medical process. Video aims to augment various stages of the customer journey for the hospital </p>

                                    </div>
                                </div>
                                <div className="tt-page-rating">
                                    <div className="tt-page-title test-author">Smart Hospital </div>

                                </div>
                           
                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="800ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/Retail.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                    <div className="tt-text wow fadeInUp">
                                        <p><strong> A Retail Buyer’s Story </strong></p>
                                        <p> A Japanese firm*, uses Vidzai to leverage its customer buying information and the loyalty points to provide an unbeatable offer for next purchase. Rich visuals including dynamic </p>

                                    </div>
                                </div>
                                <div className="tt-page-rating">
                                    <div className="tt-page-title test-author">Retail</div>

                                </div>
                           
                        </div>
                    </div>
                    <div className="isotope-item col-xs-6 col-sm-4 wow fadeInUp" data-wow-delay="1000ms">
                        <div className="tt-page">
                           
                                <div className="tt-page-testimonial text-center">
                                    <div className="resp-container">
                                        <iframe className="resp-iframe" src="http://localhost:3000/api/videourl/RecruitmentStory.mp4" allow="encrypted-media" allowFullScreen="" width="100%" height="100%" frameBorder="0"></iframe>
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
                    </div>
                </div>
            </div>
            <div className="col-sm-12 text-center marginTop10 marginBottom20 footerarrow">
                <p>Like what you see? Try it for yourself</p>
                <div className="arrow bounce marginTop20">
                    <Link to="/customerstories1"> <i className="fa fa-angle-double-down fa-3x"></i></Link>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>


    );
 };
}

export default CustomerStories;
