import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ContextTag from '../../components/ContextTag/ContextTag';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import './Home.scss';
import Button from '../../components/Button/Button';
import RecentBanner from '../../components/RecentBanner/RecentBanner';

const Home = () => {
  const { state, recent, getProjectByName } = useContext(AppContext);
  const { RECENT_PROJECT_NAME } = state;
  const history = useHistory();

  useEffect(() => {
    getProjectByName(RECENT_PROJECT_NAME);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleContact = () => {
    history.push(`/contact`);
  }

  return (
    <div className="Home">

      <div className="Home-top">
        <div className="Home-imgContainer">
          <div className="Home-gradient"></div>
          <img className="Home-img" src="./png/profile.png" alt="Profile pic" />
          <div className="Home-roleTag tag2">
            <h4>Front-End</h4>
            <p>Developer</p>
          </div>
          <div className="Home-roleTag tag1">
            <h4>UI</h4>
            <p>Designer</p>
          </div>
        </div>
        <h2 className="Home-title">Hi, I’m <span>Santiago</span>. My creativity allows me to build experiences & interfaces.</h2>
        <Button onClick={handleContact} text="Contact me" />
      </div>

      <SocialMedia />

      <div className="Home-recentContainer">
        <ContextTag text="Recent Project" />
        {recent ?
          <RecentBanner data={recent} />
          :
          <h5>Loading recent Project</h5>}
      </div>

    </div>
  );
};

export default Home;
