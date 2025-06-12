
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const TrendingTopics = () => {
  const [selectedTopic, setSelectedTopic] = useState('React');
  
  const topics = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Docker', color: 'bg-cyan-500' },
    { name: 'GraphQL', color: 'bg-pink-500' },
    { name: 'AWS', color: 'bg-orange-500' },
    { name: 'TypeScript', color: 'bg-purple-500' },
    { name: 'MongoDB', color: 'bg-emerald-500' },
    { name: 'Vue.js', color: 'bg-teal-500' }
  ];

  const handleTopicClick = (topicName) => {
    setSelectedTopic(topicName);
    console.log('Selected topic:', topicName);
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Trending Topics</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <Badge
              key={topic.name}
              onClick={() => handleTopicClick(topic.name)}
              className={`${topic.color} hover:opacity-80 cursor-pointer px-6 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedTopic === topic.name ? 'ring-2 ring-white' : ''
              }`}
            >
              {topic.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
