import React, { Component } from 'react';
//import "node_modules/video-react/dist/video-react.css"; // import css
//import '../../node_modules/video-react/dist/video-react.css';
//import { Player } from 'video-react';
import ReactPlayer from 'react-player';

class  Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

   videolist = [
    {id: 1, name: 'Clara', videourl: 'http://localhost:3000/api/videourl/clara.mp4'},
    {id: 2, name: 'Jane', videourl: 'http://localhost:3000/api/videourl/Jane.mp4'},
    {id: 3, name: 'Mary', videourl: 'http://localhost:3000/api/videourl/Mary.mp4'},
    //{id: 4, name: 'clara2', videourl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'},
    //{id: 5, name: 'clara3', videourl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'},
  ]
  
  

  renderNextVideo =(vi) => {
    //console.log(vi);
    this.setState({counter: vi});
    this.renderVideo(this.state.counter);
  }
  renderVideo = (vi) =>{
    console.log(this.state.counter);
    console.log(this.videolist.length);
     if (this.state.counter > this.videolist.length -1 ){
       return;
     }

    return(
        <div>
          <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p>
           <ReactPlayer 
         //url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' 
         url= {this.videolist[this.state.counter].videourl}
         onEnded={() => this.renderNextVideo(this.state.counter + 1)}
       playing />
      
    {/* <Player
      playsInline
      poster="/assets/poster.png" 
      src={this.videolist[this.state.counter].videourl}
      // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
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
