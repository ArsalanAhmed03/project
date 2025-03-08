import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const originalPosts = [
  {
    id: 1,
    title: "National Chess Championship 2024",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
    category: "Registration Open",
    description: "Entry fee: $50 | Prize pool: $10,000 | Register by March 31st"
  },
  {
    id: 2,
    title: "Swimming Competition Winners",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=800",
    category: "Results",
    description: "1st Place: John Doe | 2nd Place: Jane Smith | 3rd Place: Mike Johnson"
  },
  {
    id: 3,
    title: "Marathon 2024",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&itfit=crop&q=80&w=800",
    category: "Registration",
    description: "Early bird: $30 | Regular: $45 | Premium Package: $75"
  },
  {
    id: 4,
    title: "Tennis Tournament Results",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
    category: "Winners",
    description: "Champion: Sarah Williams | Runner-up: David Brown"
  }
];

// Create a wrapped array with duplicated items for smooth infinite scroll
const posts = [
  ...originalPosts.map(post => ({ ...post, id: `prev-${post.id}` })),
  ...originalPosts,
  ...originalPosts.map(post => ({ ...post, id: `next-${post.id}` }))
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(originalPosts.length); // Start from the middle set
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    
    // Reset to middle set if we've scrolled to the cloned sets
    if (currentIndex >= originalPosts.length * 2) {
      setCurrentIndex(originalPosts.length);
    } else if (currentIndex < originalPosts.length) {
      setCurrentIndex(originalPosts.length * 2 - 1);
    }
  };

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const getTransformValue = () => {
    let postWidth;
    let gapWidth = 1; // percentage gap between posts

    if (windowWidth < 768) {
      postWidth = 100; // Full width on mobile
    } else if (windowWidth < 1024) {
      postWidth = 50; // Half width on tablet
    } else {
      postWidth = 33.33; // One-third width on desktop
    }

    return `translateX(-${currentIndex * (postWidth + gapWidth)}%)`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4">
      {/* Gallery Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">Gallery</h2>
      
      <div className="relative">
        <div className="flex items-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: getTransformValue(),
                ...(isTransitioning ? {} : { transition: 'none' })
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600">{post.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
