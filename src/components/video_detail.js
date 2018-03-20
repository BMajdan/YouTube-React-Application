import React, {Component} from 'react';

class VideoDetail extends Component{

	constructor(props){
		super(props)
	}

	render() {
		let _video = this.props.video
		if(!_video){
			return <div>Loading...</div>;
		}
			
		const videoId = _video.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>

				<div className="details">
					<div>{_video.snippet.title}</div>
					<div>{_video.snippet.description}</div>
				</div>	
			</div>
		);
	}
}

export default VideoDetail;