import { useEffect, useRef } from 'react';

import { cloneEventListeners } from '@/shared/lib';

import '../comment.scss';

/**
 * CommentSection 컴포넌트
 *
 * @warning
 * 로컬 환경의 경우 티스토리에서 제공하는 comment.js 스크립트 및 스크립트가 참조하는 window 티스토리 객체가 없어 댓글 기능이 동작하지 않습니다.
 */
export function CommentSection() {
  const ref = useRef<HTMLElement>(null);
  const commentElement = document.querySelector('[data-tistory-react-app="Comment"]') as HTMLElement;
  const clonedCommentElement = commentElement.cloneNode(true) as HTMLElement;

  useEffect(() => {
    if (ref.current && ref.current.childElementCount === 0) {
      cloneEventListeners(commentElement, clonedCommentElement);
      ref.current.appendChild(clonedCommentElement);
    }
  }, [ref.current]);

  return (
    <section
      className="mx-auto max-w-3xl px-6 py-10"
      id="comment"
      ref={ref}
    />
  );
}
