// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      await Timeout.set(2000);

      console.log("Got back:", response);
      set_articles(response.data);
    }

    doSomeDataFetching();
  }, []);
  const clearState = () => {
    set_articles([]);
  };
  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button onClick={clearState}>clear articles</button>
      {articles ? (
        articles.map((article) => (
          <div>
            <ArticleCard title={article.title} content={article.body} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
