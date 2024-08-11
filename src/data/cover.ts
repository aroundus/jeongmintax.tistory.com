export interface CoverItem {
  title: string; // 글 제목
  summary: string; // 글 요약 내용
  path: string; // 주소 경로
  thumbnailURL: string; // 썸네일 주소
  category: string; // 카테고리 이름
  categoryPath: string; // 카테고리 경로
  commentCount: number; // 댓글 수
  date: string; // 발행 일자
  dateTime: string; // 발행 일시
}

const INITIAL_COVER_ITEM: CoverItem = {
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

export function getCoverItems(name: string) {
  const elements = document.querySelectorAll(`[data-cover-group="${name}"] .cover-item`);

  return Array.from(elements).map((element) => {
    try {
      return JSON.parse(element.innerHTML) as CoverItem;
    } catch {
      return INITIAL_COVER_ITEM;
    }
  });
}
