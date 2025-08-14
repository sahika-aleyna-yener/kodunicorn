export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: Date;
  updatedDate?: Date;
  readingTime: number;
  coverImage?: string;
  featured: boolean;
  likes: number;
  comments: Comment[];
}

export type BlogCategory =
  | 'women-in-tech'    // Teknolojide Kadın
  | 'computer-science' // Bilgisayar Bilimleri
  | 'education'        // Eğitim İçerikleri
  | 'general-culture'  // Genel Kültür
  | 'daily-life';      // Günlük Yaşam

export interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishDate: Date;
  likes: number;
  replies?: Comment[];
}

export interface BlogFilter {
  category?: BlogCategory;
  tag?: string;
  author?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchQuery?: string;
}

export interface BlogStats {
  totalPosts: number;
  totalComments: number;
  totalLikes: number;
  popularCategories: {
    category: BlogCategory;
    count: number;
  }[];
  popularTags: {
    tag: string;
    count: number;
  }[];
}

export interface BlogSidebarProps {
  categories: {
    name: BlogCategory;
    count: number;
  }[];
  popularPosts: BlogPost[];
  tags: {
    name: string;
    count: number;
  }[];
  onCategorySelect: (category: BlogCategory) => void;
  onTagSelect: (tag: string) => void;
}

export interface BlogListProps {
  posts: BlogPost[];
  filter: BlogFilter;
  onFilterChange: (filter: BlogFilter) => void;
  onPostClick: (post: BlogPost) => void;
}

export interface BlogPostProps {
  post: BlogPost;
  onLike: (postId: string) => void;
  onComment: (postId: string, comment: Omit<Comment, 'id' | 'publishDate'>) => void;
  onShare: (postId: string) => void;
}