import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div className="text-center py-8">Blog post not found</div>;
    }

    return (
        <article className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
};

export default BlogPost;