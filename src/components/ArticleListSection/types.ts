export interface ArticleListItemContent {
  category: string;
  commentCount?: number;
  date: string;
  isLikeActive: boolean;
  likeCount: number | null;
  path: string;
  summary: string;
  title: string;
}
