import { getBlog } from '@/data/blog';

export interface Article {
  title: string; // 글 제목
  summary: string; // 글 요약 내용
  content: string; // 글 본문
  path: string; // 주소 경로
  author: string; // 작성자
  thumbnailURL: string; // 썸네일 주소
  category: string; // 카테고리 이름
  categoryPath: string; // 카테고리 경로
  date: string; // 발행 일자
  dateTime: string; // 발행 일시
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
