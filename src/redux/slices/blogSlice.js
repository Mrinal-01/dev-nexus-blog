
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  mostLikedBlogs: [
    {
      id: 1,
      title: "Building Type-Safe React Components with TypeScript",
      author: "John Smith",
      date: "Dec 15, 2023",
      likes: 234,
      comments: 45,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      category: "React"
    },
    {
      id: 2,
      title: "AWS Architecture Patterns for Scalable Applications",
      author: "Sarah Johnson",
      date: "Dec 12, 2023",
      likes: 189,
      comments: 32,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      category: "AWS"
    },
    {
      id: 3,
      title: "Cross-Platform Mobile Development with React Native",
      author: "Mike Chen",
      date: "Dec 10, 2023",
      likes: 156,
      comments: 28,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "Mobile"
    },
    {
      id: 4,
      title: "Database Optimization Techniques for Better Performance",
      author: "Alex Rodriguez",
      date: "Dec 8, 2023",
      likes: 143,
      comments: 22,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      category: "Database"
    }
  ],
  videos: [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      description: "Complete guide to React Hooks with practical examples",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      duration: "45:30",
      views: "12.5K"
    },
    {
      id: 2,
      title: "Building REST APIs with Node.js",
      description: "Learn to build scalable REST APIs from scratch",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      duration: "38:15",
      views: "8.2K"
    },
    {
      id: 3,
      title: "Docker Containerization Guide",
      description: "Containerize your applications with Docker",
      thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=250&fit=crop",
      duration: "52:20",
      views: "15.1K"
    }
  ],
  currentSlide: 0,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
    likeBlog: (state, action) => {
      const blog = state.mostLikedBlogs.find(b => b.id === action.payload);
      if (blog) {
        blog.likes += 1;
      }
    },
  },
});

export const { setCurrentSlide, likeBlog } = blogSlice.actions;
export default blogSlice.reducer;
