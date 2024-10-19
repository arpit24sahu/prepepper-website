import React from 'react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is reshaping the software industry.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      title: "5 Essential DevOps Practices for Startups",
      excerpt: "Key DevOps strategies to boost efficiency and collaboration in your startup.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
    {
      title: "Securing Your Cloud Infrastructure",
      excerpt: "Best practices for maintaining robust security in cloud environments.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href={post.link} className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150 ease-in-out">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;