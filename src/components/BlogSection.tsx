import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link key={index} to={`/blogs/${post.slug}`} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <img className="w-full h-48 object-cover" src={post.coverImage} alt={post.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 ease-in-out">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;