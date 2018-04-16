import React from 'react';
//import "node_modules/video-react/dist/video-react.css"; // import css
//import '../../node_modules/video-react/dist/video-react.css';
//import { Player } from 'video-react';
import ReactPlayer from 'react-player'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Vidzai!
      </h1>
      Collect feedback from your users
       <br/>
       <div className='player-wrapper'>

       <ReactPlayer 
         url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
         //url='http://localhost:3000/api/videourl/Thank-You-Clean_v1.mp4' 
       playing />
      
    {/* <Player
      playsInline
      poster="/assets/poster.png" 
      //src="http://localhost:3000/api/videourl/Thank-You-Clean_v1.mp4"
       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}

    {/* <video id="my_video_1" class="video-js vjs-default-skin" controls  
    preload="auto" width="640" height="264" poster="my_video_poster.png"  
    data-setup="{}">  
    <source src="http://localhost:5000/api/videourl/Thank-You-Clean_v1.mp4" 
      type='video/mp4'/> </video> */}
  
      </div>
    </div>
  );
};

export default Landing;
