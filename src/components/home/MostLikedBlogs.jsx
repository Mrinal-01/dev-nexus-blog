
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heart, MessageCircle } from 'lucide-react';
import { likeBlog } from '../../redux/slices/blogSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MostLikedBlogs = () => {
  const dispatch = useDispatch();
  const { mostLikedBlogs } = useSelector(state => state.blog);

  const handleLike = (blogId) => {
    dispatch(likeBlog(blogId));
  };

  const handleViewAll = () => {
    console.log('View all blogs clicked');
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Most Liked Blogs</h2>
          <Button 
            onClick={handleViewAll}
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostLikedBlogs.map((blog) => (
            <Card key={blog.id} className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleLike(blog.id)}
                      className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{blog.likes}</span>
                    </button>
                    
                    <div className="flex items-center space-x-1 text-gray-400">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{blog.comments}</span>
                    </div>
                  </div>
                  
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read
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

export default MostLikedBlogs;
