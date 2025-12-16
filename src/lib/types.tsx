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
  id: number;
  name: string;
  email: string;
  subject: string;
  status: 'New' | 'In Progress' | 'Closed';
  date: string;
}