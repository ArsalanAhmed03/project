import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Post1 from "../assets/spiral.png";
import Post2 from "../assets/spiral.png";
import Post3 from "../assets/spiral.png";
import Post4 from "../assets/spiral.png";


const posts = [
  {
    id: 1,
    title: "Registration Prices",
    description:
      "Check out the competitive pricing for registration to IEEE Week competitions. Don't miss the early bird discounts!",
    image: Post1,
  },
  {
    id: 2,
    title: "Competition Winners",
    description:
      "Celebrate our champions and see the innovative projects that took first place.",
    image: Post2,
  },
  {
    id: 3,
    title: "Runner Ups",
    description:
      "Discover the remarkable talent of our runner ups and their creative ideas.",
    image: Post3,
  },
  {
    id: 4,
    title: "Event Highlights",
    description:
      "Experience the best moments from IEEE Week through our curated gallery of event highlights.",
    image: Post4,
  },
];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsToShow = 3;
  const totalPosts = posts.length;

  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < postsToShow; i++) {
      visible.push(posts[(currentIndex + i) % totalPosts]);
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPosts) % totalPosts);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPosts);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  const visiblePosts = getVisiblePosts();

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="relative">
          <div className="flex justify-center items-center">
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                data-aos="fade-up"
                className="bg-white rounded-2xl shadow-lg overflow-hidden mx-4 flex-none w-80"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          {}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
