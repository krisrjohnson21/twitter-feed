import React from 'react';
import Tweet from '../components/Tweet'

const TwitterFeed = (props) => {

  let iconAlert = event => {
    if (event.target.className.includes("fa-reply")) {
      alert("Reply")
    } else if (event.target.className.includes("fa-retweet")) {
      alert("Retweet")
    } else if (event.target.className.includes("fa-heart")) {
      alert("Like")
    } else if (event.target.className.includes("fa-ellipsis")) {
      alert("More")
    }
  }

  const eachTweet = props.data.map((twoot) => {
    return(
      <Tweet
        key={twoot.id_str}
        user={twoot.user}
        twoot={twoot}
        callback={iconAlert}
      />
    )
  })

  return(
    <div>{eachTweet}</div>
  )
};

export default TwitterFeed;
