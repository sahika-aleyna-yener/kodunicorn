import React from 'react';
import styled from '@emotion/styled';
import type { BlogPostProps, Comment } from './types';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PostHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const PostTitle = styled.h1`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.text};
  margin: 0 0 20px;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${theme.borderRadius.medium};
  margin-bottom: 40px;
`;

const PostContent = styled.div`
  font-size: ${theme.typography.fontSizes.medium};
  line-height: 1.8;
  color: ${theme.colors.text};

  p {
    margin-bottom: 20px;
  }

  h2 {
    margin: 40px 0 20px;
    font-size: ${theme.typography.fontSizes.xlarge};
  }

  h3 {
    margin: 30px 0 15px;
    font-size: ${theme.typography.fontSizes.large};
  }

  code {
    background-color: ${theme.colors.background};
    padding: 2px 6px;
    border-radius: ${theme.borderRadius.small};
  }

  blockquote {
    border-left: 4px solid ${theme.colors.primary};
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
  }
`;

const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.background};
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: ${theme.borderRadius.small};
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.medium};
  cursor: pointer;
  transition: ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

const CommentsSection = styled.section`
  margin-top: 40px;
`;

const CommentForm = styled.form`
  margin-bottom: 30px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px;
  border: 1px solid ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  font-size: ${theme.typography.fontSizes.medium};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentCard = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-weight: ${theme.typography.fontWeights.medium};
`;

const CommentDate = styled.span`
  font-size: ${theme.typography.fontSizes.small};
  color: ${theme.colors.text};
`;

const CommentContent = styled.p`
  font-size: ${theme.typography.fontSizes.medium};
  line-height: 1.5;
  margin: 10px 0;
`;

const CommentActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const BlogPost: React.FC<BlogPostProps> = ({
  post,
  onLike,
  onComment,
  onShare
}) => {
  const [commentText, setCommentText] = React.useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, {
        content: commentText,
        author: {
          name: 'Kullanıcı', // Gerçek uygulamada oturum açmış kullanıcı
          avatar: '/assets/default-avatar.png'
        },
        likes: 0
      });
      setCommentText('');
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderComment = (comment: Comment) => (
    <CommentCard key={comment.id}>
      <CommentHeader>
        <CommentAuthor>
          {comment.author.avatar && (
            <AuthorAvatar src={comment.author.avatar} alt={comment.author.name} />
          )}
          <AuthorName>{comment.author.name}</AuthorName>
        </CommentAuthor>
        <CommentDate>{formatDate(comment.publishDate)}</CommentDate>
      </CommentHeader>
      
      <CommentContent>{comment.content}</CommentContent>
      
      <CommentActions>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ❤️ {comment.likes}
        </ActionButton>
        <ActionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💬 Yanıtla
        </ActionButton>
      </CommentActions>

      {comment.replies && comment.replies.length > 0 && (
        <div style={{ marginLeft: 40, marginTop: 20 }}>
          {comment.replies.map(renderComment)}
        </div>
      )}
    </CommentCard>
  );

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <span>{formatDate(post.publishDate)}</span>
          <span>{post.readingTime} dk okuma</span>
          <span>{post.category}</span>
        </PostMeta>
      </PostHeader>

      {post.coverImage && (
        <PostImage src={post.coverImage} alt={post.title} />
      )}

      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

      <PostActions>
        <ActionButton
          onClick={() => onLike(post.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ❤️ {post.likes}
        </ActionButton>
        
        <ActionButton
          onClick={() => onShare(post.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📤 Paylaş
        </ActionButton>
      </PostActions>

      <CommentsSection>
        <h3>Yorumlar ({post.comments.length})</h3>
        
        <CommentForm onSubmit={handleSubmitComment}>
          <CommentInput
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Yorumunuzu yazın..."
          />
          <ActionButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: 10 }}
          >
            Yorum Yap
          </ActionButton>
        </CommentForm>

        <CommentList>
          {post.comments.map(renderComment)}
        </CommentList>
      </CommentsSection>
    </PostContainer>
  );
};