import React from 'react';
import styled from '@emotion/styled';
import { BlogListProps, BlogPost } from './types';
import { theme } from '../../styles/theme';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
`;

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.medium};

  &:focus {
    outline: none;
    box-shadow: ${theme.shadows.glow};
  }
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const PostCard = styled(motion.article)`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};
  transition: ${theme.transitions.normal};

  &:hover {
    transform: ${theme.effects.hover.lift};
    box-shadow: ${theme.shadows.large};
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h2`
  margin: 0 0 10px;
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: ${theme.typography.fontSizes.small};
  color: ${theme.colors.text};
`;

const PostCategory = styled.span`
  padding: 4px 8px;
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.small};
`;

const PostExcerpt = styled.p`
  margin: 0;
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.medium};
  line-height: 1.5;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${theme.colors.background};
`;

const PostStats = styled.div`
  display: flex;
  gap: 15px;
  font-size: ${theme.typography.fontSizes.small};
`;

export const BlogList: React.FC<BlogListProps> = ({
  posts,
  filter,
  onFilterChange,
  onPostClick
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filter,
      searchQuery: e.target.value
    });
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderPostCard = (post: BlogPost) => (
    <PostCard
      key={post.id}
      onClick={() => onPostClick(post)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {post.coverImage && (
        <PostImage src={post.coverImage} alt={post.title} />
      )}
      
      <PostContent>
        <PostCategory>{post.category}</PostCategory>
        <PostTitle>{post.title}</PostTitle>
        
        <PostMeta>
          <span>{formatDate(post.publishDate)}</span>
          <span>{post.readingTime} dk okuma</span>
        </PostMeta>
        
        <PostExcerpt>{post.excerpt}</PostExcerpt>
        
        <PostFooter>
          <PostStats>
            <span>❤️ {post.likes}</span>
            <span>💬 {post.comments.length}</span>
          </PostStats>
          
          <div>
            {post.tags.map(tag => (
              <span key={tag} style={{ marginRight: '5px' }}>#{tag}</span>
            ))}
          </div>
        </PostFooter>
      </PostContent>
    </PostCard>
  );

  return (
    <BlogContainer>
      <FilterSection>
        <FilterGrid>
          <FilterInput
            type="text"
            placeholder="Blog yazılarında ara..."
            value={filter.searchQuery || ''}
            onChange={handleSearchChange}
          />
        </FilterGrid>
      </FilterSection>

      <PostGrid>
        {posts.map(renderPostCard)}
      </PostGrid>
    </BlogContainer>
  );
};