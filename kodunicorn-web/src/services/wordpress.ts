import axios from 'axios';

const API_URL = 'https://public-api.wordpress.com/wp/v2/sites/sahikaaleyna180.wordpress.com';

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  categories: number[];
  tags: number[];
  _embedded?: {
    author: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

class WordPressService {
  async getPosts(page = 1, perPage = 10) {
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        params: {
          page,
          per_page: perPage,
          _embed: true,
          context: 'embed'
        }
      });
      return {
        posts: response.data as WordPressPost[],
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      return { posts: [], totalPages: 1, total: 0 };
    }
  }

  async getPost(slug: string) {
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        params: {
          slug,
          _embed: true,
          context: 'embed'
        }
      });
      return response.data[0] as WordPressPost;
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      return response.data as WordPressCategory[];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  async getTags() {
    try {
      const response = await axios.get(`${API_URL}/tags`);
      return response.data as WordPressTag[];
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  }

  async getPostsByCategory(categoryId: number, page = 1, perPage = 10) {
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        params: {
          categories: categoryId,
          page,
          per_page: perPage,
          _embed: true,
          context: 'embed'
        }
      });
      return {
        posts: response.data as WordPressPost[],
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return { posts: [], totalPages: 1, total: 0 };
    }
  }

  async getPostsByTag(tagId: number, page = 1, perPage = 10) {
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        params: {
          tags: tagId,
          page,
          per_page: perPage,
          _embed: true,
          context: 'embed'
        }
      });
      return {
        posts: response.data as WordPressPost[],
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      return { posts: [], totalPages: 1, total: 0 };
    }
  }

  async search(query: string, page = 1, perPage = 10) {
    try {
      const response = await axios.get(`${API_URL}/posts`, {
        params: {
          search: query,
          page,
          per_page: perPage,
          _embed: true,
          context: 'embed'
        }
      });
      return {
        posts: response.data as WordPressPost[],
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      };
    } catch (error) {
      console.error('Error searching posts:', error);
      return { posts: [], totalPages: 1, total: 0 };
    }
  }
}

export const wordPressService = new WordPressService();