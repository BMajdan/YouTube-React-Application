import React, { Component } from 'React';

class VideoListItem extends Component{

	constructor({video, onVideoSelect}){
		super({video, onVideoSelect})
		this.video = video
		this.onVideoSelect = onVideoSelect
	}

	render(){
		let _video = this.props.video
		const imgageUrl = _video.snippet.thumbnails.default.url;
		return (
			<li onClick={ () => this.props.onVideoSelect(_video) }className="list-group-item">
				 <div className="video-list media">
				 	<div className="media-left">
				 		<img className="media-object" src={imgageUrl} />
				 	</div>

				 	<div className="media-body">
				 		<div className="media-heading">{_video.snippet.title}</div>
				 	</div>
				 </div>
			</li>
		);
	}
}

export default VideoListItem;