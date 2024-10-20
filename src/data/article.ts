import { getBlog } from '@/data/blog';
import { truncateWithPeriod } from '@/helpers/string';

/**
 * 홈 커버 글
 * @description 홈 화면에서 사용합니다.
 */
export interface CoverArticle {
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
   * 댓글 수
   */
  commentCount: number;

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
 * 글
 * @description 홈 화면을 제외한 화면에서 사용합니다.
 */
export interface Article extends CoverArticle {
  /**
   * 글 본문
   */
  content: string;

  /**
   * 작성자
   */
  author: string;

  /**
   * 좋아요 수
   * @warning 좋아요 수는 DOM 렌더링 이후에 티스토리 스크립트가 동적으로 업데이트합니다. 좋아요 수 사용 방법은 `updatedArticles`를 검색해 주세요.
   */
  likeCount?: number;
}

const INITIAL_COVER_ARTICLE: CoverArticle = {
  title: '',
  summary: '',
  path: '',
  thumbnailURL: '',
  category: '',
  categoryPath: '',
  commentCount: 0,
  date: '',
  dateTime: '',
};

const INITIAL_ARTICLE: Article = {
  ...INITIAL_COVER_ARTICLE,
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
        summary: truncateWithPeriod(coverArticle.summary, 150),
      };
    } catch (error) {
      console.error(error);

      return INITIAL_COVER_ARTICLE;
    }
  });
}

export function getArticles() {
  const blog = getBlog();
  const elements = document.getElementById('tistory')!.querySelectorAll('#article .article');

  return Array.from(elements).map((element) => {
    try {
      const articleElement = element.querySelector('[data-article="article"]')!;
      const article = JSON.parse(articleElement.innerHTML) as Article;
      const contentElement = element.querySelector('[data-article="content"] .contents_style')!;
      const commentCountElement = element.querySelector('[data-article="commentCount"]')!;
      const likeCountElement = element.querySelector('.uoc-count');

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

      // <h*> 요소에 id 설정
      const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6') as NodeListOf<HTMLHeadingElement>;

      headings.forEach((heading) => {
        heading.id = heading.textContent!.trim().toLowerCase().replace(/\s+/g, '-');
      });

      const content = contentElement.innerHTML;
      const summary = contentElement.querySelector('p')?.innerText || '';
      const commentCount = Number(commentCountElement.textContent);

      // 좋아요 수 업데이트 전: undefined
      // 좋아요 수 업데이트 후: number (좋아요 수가 없으면 `공감` 문자열을 표시하기 때문에 0으로 치환합니다.)
      const likeCount = likeCountElement ? Number(likeCountElement.textContent) || 0 : undefined;

      return {
        ...article,
        summary: truncateWithPeriod(summary.trim() || article.summary, 150),
        content,
        category: article.category === '카테고리 없음' ? blog.title : `#${article.category}`,
        commentCount,
        likeCount,
      };
    } catch (error) {
      console.error(error);

      return INITIAL_ARTICLE;
    }
  });
}
