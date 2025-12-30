
import React from 'react';
import { BlogPost, Category } from '../types';
import { CATEGORY_LABELS } from '../constants';

interface Props {
  post: BlogPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  const cat = CATEGORY_LABELS[post.category];

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${cat.color} shadow-sm`}>
          {cat.label}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center text-xs text-gray-400 mb-3 gap-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">بواسطة: {post.author}</span>
          <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            اقرأ المزيد
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
