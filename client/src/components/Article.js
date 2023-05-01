

const Article = ({ article}) => {
    return (
      <div className="article">
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read more</a>
        <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
        <img src={article.urlToImage} alt={article.title} />
      </div>
    );
  };

export default Article;