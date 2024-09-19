import { getBlog } from '@/data/blog';

interface BaseArticle {
  /**
   * 글 제목
   */
  title: string;

  /**
   * 글 요약 내용
   */
  summary: string;

  /**
   * 주소 경로
   * @example '/1'
   */
  path: string;

  /**
   * 썸네일 주소
   */
  thumbnailURL: string;

  /**
   * 카테고리 이름
   */
  category: string;

  /**
   * 카테고리 경로
   */
  categoryPath: string;

  /**
   * 발행 일자
   * @example '2024.08.25'
   */
  date: string;

  /**
   * 발행 일시
   * @example '2024.08.25 00:00'
   */
  dateTime: string;
}

/**
 * 홈 커버 글
 * @description 홈 화면에서 사용합니다.
 */
export interface CoverArticle extends BaseArticle {
  /**
   * 댓글 수
   */
  commentCount: number;
}

/**
 * 글
 * @description 홈 화면을 제외한 화면에서 사용합니다.
 */
export interface Article extends BaseArticle {
  /**
   * 글 본문
   */
  content: string;

  /**
   * 작성자
   */
  author: string;
}

const INITIAL_BASE_ARTICLE: BaseArticle = {
  title: '',
  summary: '',
  path: '',
  thumbnailURL: '',
  category: '',
  categoryPath: '',
  date: '',
  dateTime: '',
};

const INITIAL_COVER_ARTICLE: CoverArticle = {
  ...INITIAL_BASE_ARTICLE,
  commentCount: 0,
};

const INITIAL_ARTICLE: Article = {
  ...INITIAL_BASE_ARTICLE,
  content: '',
  author: '',
};

export function getCoverArticles(name: string) {
  const blog = getBlog();
  const elements = document.querySelectorAll(`[data-cover="${name}"] .cover-item`);

  return Array.from(elements).map((element) => {
    try {
      const coverArticle = JSON.parse(element.innerHTML) as CoverArticle;

      return {
        ...coverArticle,
        category: coverArticle.category === '카테고리 없음' ? blog.title : `#${coverArticle.category}`,
      };
    } catch {
      return INITIAL_COVER_ARTICLE;
    }
  });
}

export function getArticles() {
  const blog = getBlog();
  const elements = document.getElementById('article')!.querySelectorAll('.article');

  return Array.from(elements).map((element) => {
    try {
      const articleElement = element.querySelector('[data-article="article"]')!;
      const article = JSON.parse(articleElement.innerHTML) as Article;
      const contentElement = element.querySelector(`[data-article="content"] .contents_style`)!;

      // 테이블 속성 삭제
      contentElement.querySelectorAll('table').forEach((element) => {
        element.removeAttribute('border');
        element.removeAttribute('data-ke-align');
        element.removeAttribute('style');
      });

      // 티스토리 data-ke-size 속성 삭제
      contentElement.querySelectorAll('[data-ke-size]').forEach((element) => {
        element.removeAttribute('data-ke-size');
      });

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
