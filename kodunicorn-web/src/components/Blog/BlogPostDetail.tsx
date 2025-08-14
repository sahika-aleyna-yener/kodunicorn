import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPost } from './BlogPost';
import type { BlogPost as BlogPostType } from './types';

interface BlogPostDetailProps {
  posts: BlogPostType[];
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: any) => void;
  onShare: (postId: string) => void;
}

export const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  posts,
  onLike,
  onComment,
  onShare
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '50px',
        color: '#666'
      }}>
        <h2>Blog yazısı bulunamadı</h2>
        <p>Bu yazı mevcut değil veya kaldırılmış olabilir.</p>
        <button 
          onClick={() => navigate('/blog')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6B4EE6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Blog'a Dön
        </button>
      </div>
    );
  }

  return (
    <BlogPost
      post={post}
      onLike={onLike}
      onComment={onComment}
      onShare={onShare}
    />
  );
}; 