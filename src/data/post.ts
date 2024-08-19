import { getBlog } from '@/data/blog';

export interface Post {
  title: string; // 글 제목
  summary: string; // 글 요약 내용
  path: string; // 주소 경로
  thumbnailURL: string; // 썸네일 주소
  category: string; // 카테고리 이름
  categoryPath: string; // 카테고리 경로
  commentCount?: number; // 댓글 수
  date: string; // 발행 일자
  dateTime: string; // 발행 일시
}

const INITIAL_POST: Post = {
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

export function getPosts(name: string) {
  const blog = getBlog();
  const elements = document.querySelectorAll(`[data-cover-group="${name}"] .cover-item`);

  return Array.from(elements).map((element) => {
    try {
      const post = JSON.parse(element.innerHTML) as Post;

      return {
        ...post,
        category: post.category === '카테고리 없음' ? blog.title : `#${post.category}`,
      };
    } catch {
      return INITIAL_POST;
    }
  });
}
