import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogList: React.FC = () => {
    return (
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
                        <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;