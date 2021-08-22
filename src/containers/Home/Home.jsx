import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import ContextTag from '../../components/ContextTag/ContextTag';
import MadeTag from '../../components/MadeTag/MadeTag';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import './Home.scss';
import Button from '../../components/Button/Button';

const Home = () => {
  const { state, recent, getProject } = useContext(AppContext);
  const { API } = state;
  const history = useHistory();


  useEffect(() => {
    getProject(4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProject = () => {
    history.push(`/projects/${recent.id}`);
  }

  const handleContact = () => {
    history.push(`/contact`);
  }

  return (
    <div className="Home">
      <div className="Home-top">
        <div className="Home-imgContainer">
          <div className="Home-gradient"></div>
          <img src="" alt="Profile pic" />
        </div>
        <h2 className="Home-title">Hi, I’m <span>Santiago</span>. My creativity allows me to build experiences & interfaces.</h2>
        <Button onClick={handleContact} text="Contact me"/>
      </div>
      <SocialMedia />
      <div className="Home-recentContainer">
        <ContextTag text="Recent Project" />
        {recent ?
          <div className="Home-recent">
            {recent.recent_cover ? <img className="Home-recentImage" src={`${API}${recent.recent_cover.url}`} alt="Project recent cover" /> : ''}
            <h2 className="Home-recentTitle">{recent.name}</h2>
            <p className="Home-recentAbout">{recent.about}</p>
            {recent.e_url ? <MadeTag src={`${API}${recent.e_img.url}`} url={recent.e_url} /> : ''}
            <Button onClick={handleProject} text="See more"/>
          </div>
          :
          <h5>Loading recent Project</h5>}
      </div>
    </div>
  );
};

export default Home;
