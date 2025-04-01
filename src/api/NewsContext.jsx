import React, { useEffect, useState } from 'react'
import NewsList from '../components/Service/NewsList';

const News = () => {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        const options = {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        };

        try {
            const response = await fetch(
                `https://newsdata.io/api/1/news?apikey=pub_774696f9fde9b83241904690759e3448ffb2f&q=crypto&country=ca`,
                {
                    ...options,
                    mode: 'cors'
                }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched data:', data);
            setNews(data.results || []);
        } catch(e) {
            console.error('Error fetching news:', e);
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div>
            <h1>News</h1>
            <NewsList news={news} />
        </div>
    )
}

export default News
