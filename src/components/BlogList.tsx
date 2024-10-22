import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;