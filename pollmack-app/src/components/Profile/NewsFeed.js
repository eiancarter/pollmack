import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewsFeed = () => {

    const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=2497a2bac4394b38885ff4b1c4c26439';

    const [news, setNews] = useState()

    useEffect(() => {
    axios
        .get(url)
        .then(res => {
            console.log(res.data)
            setNews(res.data)
        })  
        .catch(err => {
            console.log("cannot get news", err)
        })
    }, [setNews])

    return (
        <div>
            {/* {news.map( post => (
                <div key={post.title}>
                    <h3>{post.title}</h3>
                    <h3>{post.author}</h3>
                </div>
            ))} */}
        </div>
    )
}

export default NewsFeed;