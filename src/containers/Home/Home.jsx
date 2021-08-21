import React from 'react';
import ContextTag from '../../components/ContextTag/ContextTag';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-top">

      </div>
      <SocialMedia />
      <div className="Home-recent">
        <ContextTag text="Recent Project"/>
      </div>
    </div>
  );
};

export default Home;
