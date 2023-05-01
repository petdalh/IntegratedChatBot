import React from 'react';
import Article from './Article';
import Answer from './Answer';

const Main = ({ article, answer }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Article article={article} />
      <Answer answer={answer} />
    </div>
  );
};

export default Main;
