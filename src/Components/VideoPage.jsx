import React from 'react'
import ReactPlayer from 'react-player/lazy';
const VideoPage = (props) => {
  // ReactPlayer.canPlay(url)
  const divStyle = {
    textAlign: 'center', 
    padding: '50px',
    paddingleft:'100px',
    width:'400px',
    
  };
  
  return (
    <section style={divStyle}>
      
      <ReactPlayer 
      url={props.item.videoId} 
      controls={true}
      
      />
      
    </section>
  )
}

export default VideoPage