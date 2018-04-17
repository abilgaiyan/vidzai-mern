import React, { Component } from 'react';
//import "node_modules/video-react/dist/video-react.css"; // import css
//import '../../node_modules/video-react/dist/video-react.css';
//import { Player } from 'video-react';
import ReactPlayer from 'react-player'

class  Landing extends Component {

   videolist = [
    {id: 1, name: 'clara1', videourl: 'http://localhost:3000/api/videourl/Thank-You-Clean_v1.mp4'},
    {id: 2, name: 'clara2', videourl: 'http://localhost:3000/api/videourl/Thank-You-Clean_v1.mp4'},
    {id: 3, name: 'clara3', videourl: 'http://localhost:3000/api/videourl/Thank-You-Clean_v1.mp4'},
  ]
  
  

  renderNextVideo =(vi) => {
    console.log(vi);
    this.renderVideo(vi);
  }
  renderVideo = (vi) =>{
     if (vi >= this.videolist.length){
       return;
     }
    return(
        <div>
          <p>Video for: {this.videolist[vi].name}</p>
           <ReactPlayer 
         //url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
         url= {this.videolist[vi].videourl}
         onEnded={() => this.renderVideo(vi + 1)}
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
    )
  }

  render(){
    

    if (!this.videolist){
      return <div>processing</div>;
    }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Vidzai!
      </h1>
      Collect feedback from your users
       <br/>
       <div className='player-wrapper'>
         {this.renderVideo(0)} 
        
      </div>
    </div>
  );
}
}

export default Landing;
