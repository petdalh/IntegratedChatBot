import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './components/Article';
import { NavBar } from "./components/NavBar";
import './Article.css'
require('dotenv').config();




const App = () => {
  const [articles, setArticles] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [answer, setAnswer] = useState([]);


  useEffect(() => {
    if (fetchData) {
      const getArticles = async () => {
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey={process.env.NEWS_API_KEY}`);
        setArticles(res.data.articles);
        console.log(res.data.articles);
        setFetchData(false);
      };
      getArticles();
    }
  }, [fetchData, searchTerm]);

  const handleClick = () => {
    setFetchData(true);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <>
      <div>
        <NavBar
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
          handleSubmit={handleSubmit}
          setAnswer={setAnswer}
        />
        <div className="wrapper">
          <div className="articles-container">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
          <div className="test-container">
            {answer.map((ans, index) => (
              <h1 key={index}>{ans}</h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  
  
};

export default App;
