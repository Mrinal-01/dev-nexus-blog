
import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import MostLikedBlogs from '../components/home/MostLikedBlogs';
import TrendingTopics from '../components/home/TrendingTopics';
import LatestVideos from '../components/home/LatestVideos';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSlider />
      <MostLikedBlogs />
      <TrendingTopics />
      <LatestVideos />
    </div>
  );
};

export default Home;
