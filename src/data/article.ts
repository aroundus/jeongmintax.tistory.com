import { getBlog } from '@/data/blog';

export interface Article {
  title: string;
  summary: string;
  content: string;
  path: string;
  author: string;
  thumbnailURL: string;
  category: string;
  categoryPath: string;
  date: string;
  dateTime: string;
}

const INITIAL_ARTICLE: Article = {
  title: '',
  summary: '',
  content: '',
  path: '',
  author: '',
  thumbnailURL: '',
  category: '',
  categoryPath: '',
  date: '',
  dateTime: '',
};

export function getArticles() {
  const blog = getBlog();
  const elements = document.getElementById('article')!.querySelectorAll('.article');

  return Array.from(elements).map((element) => {
    try {
      const articleElement = element.querySelector('[data-article="article"]')!;
      const article = JSON.parse(articleElement.innerHTML) as Article;
      const contentElement = element.querySelector(`[data-article="content"] .contents_style`)!;
      const content = contentElement.innerHTML;
      const summary = contentElement.querySelector('p')?.innerText;

      return {
        ...article,
        summary: summary || article.summary,
        content,
        category: article.category === '카테고리 없음' ? blog.title : `#${article.category}`,
      };
    } catch {
      return INITIAL_ARTICLE;
    }
  });
}
