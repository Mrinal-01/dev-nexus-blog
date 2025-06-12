
import React from 'react';
import { useSelector } from 'react-redux';
import { Play, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LatestVideos = () => {
  const { videos } = useSelector(state => state.blog);

  const handlePlayVideo = (videoId) => {
    console.log('Playing video:', videoId);
    // Add video play functionality
  };

  const handleViewAllVideos = () => {
    console.log('View all videos clicked');
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Latest Videos</h2>
          <Button 
            onClick={handleViewAllVideos}
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            View All Videos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative group cursor-pointer" onClick={() => handlePlayVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 rounded-full p-4">
                    <Play className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{video.views} views</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    onClick={() => handlePlayVideo(video.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
