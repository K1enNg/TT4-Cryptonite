import React, { useEffect, useState } from 'react'
import NewsList from '../components/Service/NewsList';

const News = () => {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/news')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setNews(data);
        } catch (error) {
            console.error('Error fetching news:', error);
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
