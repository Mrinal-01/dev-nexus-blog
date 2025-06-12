
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { setCurrentSlide } from '../../redux/slices/blogSlice';
import { Button } from '@/components/ui/button';

const HeroSlider = () => {
  const dispatch = useDispatch();
  const { currentSlide } = useSelector(state => state.blog);
  
  const slides = [
    {
      id: 1,
      title: "Advanced React Patterns",
      subtitle: "Master component composition and performance optimization techniques",
      image: "/lovable-uploads/e84e4f60-babc-4eaa-85d8-d3229c4dc00f.png",
      category: "React"
    },
    {
      id: 2,
      title: "Building Scalable APIs",
      subtitle: "Learn to create robust and scalable REST APIs with Node.js",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
      category: "Backend"
    },
    {
      id: 3,
      title: "Modern DevOps Practices",
      subtitle: "Implement CI/CD pipelines and infrastructure as code",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&h=600&fit=crop",
      category: "DevOps"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentSlide((currentSlide + 1) % slides.length));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, dispatch, slides.length]);

  const nextSlide = () => {
    dispatch(setCurrentSlide((currentSlide + 1) % slides.length));
  };

  const prevSlide = () => {
    dispatch(setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1));
  };

  const goToSlide = (index) => {
    dispatch(setCurrentSlide(index));
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Slide Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
              <div className="max-w-4xl">
                <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-4">
                  {slide.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Read Article
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
