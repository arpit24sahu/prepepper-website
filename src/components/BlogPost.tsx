import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blogs" className="text-indigo-600 hover:text-indigo-800">
            Return to blog list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <Link to="/blogs" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
        &larr; Back to blog list
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost;