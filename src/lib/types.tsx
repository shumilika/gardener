export interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export interface SidebarProps {
  articlesCount: number;
  newQueriesCount: number;
}

export interface CustomerQuery {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: "New" | "In Progress" | "Closed";
  date: string;
}

interface ArticleContentBlock {
  header: string;
  paragraph: string;
}

export interface Article {
  title: string;
  createdAt: string;
  views: number;
  status: "Published" | "Draft";
  slug: string;
  imageUrl: string;
  contentBlocks: ArticleContentBlock[];
}
