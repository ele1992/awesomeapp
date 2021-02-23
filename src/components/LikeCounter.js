import Timeout from "await-timeout";
import React, { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [liked, setLiked] = useState(false);

  const increment = () => {
    return set_numLikes(numLikes + 1);
  };
  console.log("A render!");

  //   useEffect(() => {
  //     async function waitForATimer() {
  //   console.log("A");
  //   await Timeout.set(2000);
  //   console.log("B");
  //     }
  //     waitForATimer();
  //   }, []);

  const reset = () => set_numLikes(numLikes - numLikes);
  const message = liked ? "You've liked this" : "Click to unlike";
  const iLiked = () => setLiked(!liked);
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={iLiked}>{message}</button>
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
