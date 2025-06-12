
import React from 'react';
import { useSelector } from 'react-redux';
import { Play, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Videos = () => {
  const { videos } = useSelector(state => state.blog);

  const handlePlayVideo = (videoId) => {
    console.log('Playing video:', videoId);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Video Library</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="relative group cursor-pointer" onClick={() => handlePlayVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 rounded-full p-4">
                    <Play className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">
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
    </div>
  );
};

export default Videos;
