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
      this.setState({counter: 0});
      return;
     }

    return(
        <div>
         <div className="container-fluid wow fadeInUp">
            
            <div className="tt-banner">
                <div className="tt-banner-inner">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="tt-banner-info">
                                <h5 className="tt-banner-label"> <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p> </h5>
                                <h1 className="tt-banner-title"> <strong>> {this.videolist[this.state.counter].name} </strong> <br/>into customers</h1>
                            </div>
                        </div>
						<div className="col-sm-6">
                    <img className="tt-banner-img lazy" data-original="img/banner_01.png" alt="" src="img/banner_01.png" style={{display: "block"}} />
                    {/* <p>WoW {this.videolist[this.state.counter].name} through a Visual & Personal Story </p> */}
           <ReactPlayer className="bannervideo"  url= {this.videolist[this.state.counter].videourl}
              onEnded={() => this.renderNextVideo(this.state.counter + 1)}  playing />
					
					
				</div>
                    </div>
					
                </div>
            </div>
        </div>

        </div>
    )
  }

  render(){
    

    if (!this.videolist){
      return <div>processing</div>;
    }

  return (
    <div >
       <div className='player-wrapper'>
         {this.renderVideo(0)} 
      </div>
    </div>
  );
}
}

export default Landing;
