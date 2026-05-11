import { useEffect } from "react"
import { displayAllTweets } from "../api/api";
import { useState } from "react";
import { TweetCard } from "./";

const AllTweets = ({limit = 0}) => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    (async () => {
      const fetchedTweetsResponse = await displayAllTweets({limit});
      setTweets(fetchedTweetsResponse.data.data);
    })();
  }, [])
  return (
    <div className="flex flex-wrap justify-start">
      {tweets.map(tweet => {
        return (
         <TweetCard key={tweet._id} data={tweet} />
        )
      })}
    </div>
  )
}

export default AllTweets