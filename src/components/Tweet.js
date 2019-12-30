import React from 'react'
let retweetedColor;
let likedColor;
let displayMedia;
let mediaText;

const Tweet = props => {

  if (props.twoot.liked === true) {
    likedColor =
    <span className="liked counter">
      <i className="fas fa-heart liked" onClick={props.callback}></i>
      {props.twoot.favorite_count}
    </span>
  } else {
    likedColor =
    <span className="counter">
      <i className="fas fa-heart" onClick={props.callback}></i>
      {props.twoot.favorite_count}
    </span>
  }

  if (props.twoot.retweeted === true) {
    retweetedColor =
    <span className="retwooted counter">
      <i className="fas fa-retweet retwooted" onClick={props.callback}></i>
      {props.twoot.retweet_count}
    </span>
  } else {
    retweetedColor =
    <span className="counter">
      <i className="fas fa-retweet" onClick={props.callback}></i>
      {props.twoot.retweet_count}
    </span>
  }

  if (props.twoot.entities.media) {
    props.twoot.entities.media.forEach((item) => {
      displayMedia = <img className="tweetImage" src={item.media_url}/>
    })
  }

  return(
    <div className="border">
      <div className="media-object">
        <div className="media-object-section">
          <div className="thumbnail">
            <img src={props.user.profile_image_url}/>
          </div>
        </div>
        <div className="media-object-section">
          <span className="userName">{props.twoot.user.name}</span>
          <span className="screenName">@{props.twoot.user.screen_name}</span>
          <p>{props.twoot.text}</p>
          <p>{displayMedia}</p>
          <i className="fas fa-reply" onClick={props.callback}></i>
          {retweetedColor}
          {likedColor}
          <i className="fas fa-ellipsis-h" onClick={props.callback}></i>
        </div>
      </div>
    </div>
  )
}




export default Tweet;
