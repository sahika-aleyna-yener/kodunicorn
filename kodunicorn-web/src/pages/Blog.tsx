import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { BlogList, BlogSidebar } from '../components/Blog';
import { BlogPostDetail } from '../components/Blog/BlogPostDetail';
import { theme } from '../styles/theme';
import type { BlogPost as BlogPostType, BlogCategory } from '../components/Blog/types';
import { samplePosts } from '../data/samplePosts';

const BlogContainer = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xlarge};
  padding-top: 120px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: ${theme.spacing.xlarge};
  width: 100%;
  max-width: 100vw;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    padding: ${theme.spacing.large};
    padding-top: 120px;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.medium};
    padding-top: 120px;
    gap: ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.small};
    padding-top: 120px;
    gap: ${theme.spacing.medium};
  }
`;

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [allPosts] = useState<BlogPostType[]>(samplePosts);
  const [posts, setPosts] = useState<BlogPostType[]>(samplePosts);
  const [currentFilter, setCurrentFilter] = useState<{ category?: BlogCategory; searchQuery?: string }>({});



  const handleTagSelect = (tag: string) => {
    const newFilter = { ...currentFilter, searchQuery: tag };
    setCurrentFilter(newFilter);
    
    const filteredPosts = allPosts.filter(post =>
      post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase())) ||
      post.title.toLowerCase().includes(tag.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(tag.toLowerCase())
    );
    
    setPosts(filteredPosts);
  };

  const handlePostClick = (post: BlogPostType) => {
    navigate(`/blog/${post.slug}`);
  };



  const handleFilterChange = (filter: { searchQuery?: string }) => {
    const newFilter = { ...currentFilter, searchQuery: filter.searchQuery };
    setCurrentFilter(newFilter);
    
    let filteredPosts = allPosts;
    
    if (filter.searchQuery) {
      filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(filter.searchQuery!.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filter.searchQuery!.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(filter.searchQuery!.toLowerCase()))
      );
    }
    
    if (currentFilter.category) {
      filteredPosts = filteredPosts.filter(post => post.category === currentFilter.category);
    }
    
    setPosts(filteredPosts);
  };

  const handleLike = (postId: string) => {
    // Beğeni işlemi
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: string, comment: any) => {
    // Yorum işlemi
    console.log('Comment on post:', postId, comment);
  };

  const handleShare = (postId: string) => {
    // Paylaşım işlemi
    console.log('Share post:', postId);
  };

  // Örnek kategoriler ve etiketler
  const categories = [
    { name: 'all' as BlogCategory, count: allPosts.length },
    { name: 'women-in-tech' as BlogCategory, count: 1 },
    { name: 'computer-science' as BlogCategory, count: 1 },
    { name: 'daily-life' as BlogCategory, count: 2 },
    { name: 'general-culture' as BlogCategory, count: 0 },
    { name: 'education' as BlogCategory, count: 0 }
  ];

  // Kategori filtreleme fonksiyonunu güncelle
  const handleCategorySelect = (category: BlogCategory) => {
    if (category === 'all') {
      setCurrentFilter({});
      setPosts(allPosts);
      return;
    }
    
    const newFilter = { ...currentFilter, category };
    setCurrentFilter(newFilter);
    
    let filteredPosts = allPosts;
    
    if (category) {
      filteredPosts = allPosts.filter(post => post.category === category);
    }
    
    if (currentFilter.searchQuery) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(currentFilter.searchQuery!.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(currentFilter.searchQuery!.toLowerCase())
      );
    }
    
    setPosts(filteredPosts);
  };

  const tags = [
    { name: 'python', count: 1 },
    { name: 'veri-analizi', count: 1 },
    { name: 'kadın', count: 1 },
    { name: 'teknoloji', count: 1 },
    { name: 'kişisel-gelişim', count: 1 },
    { name: 'dijital-detoks', count: 1 }
  ];

  return (
    <BlogContainer>
      <Routes>
        <Route
          path="/"
          element={
            <BlogList
              posts={posts}
              filter={{}}
              onFilterChange={handleFilterChange}
              onPostClick={handlePostClick}
            />
          }
        />
        <Route
          path="/:slug"
          element={
            <BlogPostDetail
              posts={posts}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          }
        />
      </Routes>

      <BlogSidebar
        categories={categories}
        popularPosts={posts.slice(0, 5)}
        tags={tags}
        onCategorySelect={handleCategorySelect}
        onTagSelect={handleTagSelect}
      />
    </BlogContainer>
  );
};