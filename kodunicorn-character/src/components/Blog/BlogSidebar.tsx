import React from 'react';
import styled from '@emotion/styled';
import { BlogSidebarProps } from './types';
import { theme } from '../../styles/theme';

const SidebarContainer = styled.aside`
  width: 300px;
  padding: 20px;
`;

const SidebarSection = styled.section`
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
`;

const SectionTitle = styled.h3`
  margin: 0 0 15px;
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  border-bottom: 2px solid ${theme.colors.primary};
  padding-bottom: 10px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.background};
  }
`;

const CategoryCount = styled.span`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: ${theme.typography.fontSizes.small};
`;

const PopularPostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PopularPostItem = styled.li`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.colors.background};
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const PostTitle = styled.h4`
  margin: 0 0 5px;
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

const PostMeta = styled.div`
  font-size: ${theme.typography.fontSizes.small};
  color: ${theme.colors.text};
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 5px 10px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.small};
  cursor: pointer;
  transition: ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.primary};
    color: white;
  }
`;

export const BlogSidebar: React.FC<BlogSidebarProps> = ({
  categories,
  popularPosts,
  tags,
  onCategorySelect,
  onTagSelect
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <SidebarContainer>
      <SidebarSection>
        <SectionTitle>Kategoriler</SectionTitle>
        <CategoryList>
          {categories.map(category => (
            <CategoryItem
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
            >
              <span>{category.name}</span>
              <CategoryCount>{category.count}</CategoryCount>
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>Popüler Yazılar</SectionTitle>
        <PopularPostList>
          {popularPosts.map(post => (
            <PopularPostItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>
                <div>{formatDate(post.publishDate)}</div>
                <div>❤️ {post.likes} · 💬 {post.comments.length}</div>
              </PostMeta>
            </PopularPostItem>
          ))}
        </PopularPostList>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>Etiketler</SectionTitle>
        <TagCloud>
          {tags.map(tag => (
            <Tag
              key={tag.name}
              onClick={() => onTagSelect(tag.name)}
            >
              #{tag.name} ({tag.count})
            </Tag>
          ))}
        </TagCloud>
      </SidebarSection>
    </SidebarContainer>
  );
};