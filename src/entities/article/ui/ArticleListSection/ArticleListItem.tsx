import classNames from 'classnames';
import { GoHeart as GoHeartIcon, GoHeartFill as GoHeartFillIcon } from 'react-icons/go';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import type { ArticleService } from '../../api';

export interface ArticleListItemProps extends ArticleService.Article {
  isLast?: boolean;
}

export function ArticleListItem({
  category,
  commentCount,
  date,
  isLast,
  isLikeActive,
  likeCount,
  path,
  summary,
  thumbnailUrl,
  title,
}: ArticleListItemProps) {
  return (
    <a
      className={classNames(
        'group mx-auto block cursor-pointer border-b border-solid px-6 py-12',
        isLast && 'border-b-transparent',
      )}
      href={path}
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          aria-hidden="true"
          src={thumbnailUrl}
        />
      </div>
      <div className="mt-8 text-base font-medium text-stone-500">{category}</div>
      <div
        className={classNames(
          'group-hover:text-primary mt-2 text-3xl font-bold transition-colors duration-300 ease-in-out group-hover:opacity-80 md:text-4xl',
        )}
      >
        {title}
      </div>
      <p className="mt-4 transition-colors duration-200 ease-in-out group-hover:text-neutral-600 md:text-lg">
        {summary}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-base text-stone-600">{date}</span>
        {typeof commentCount === 'number' && commentCount > 0 && (
          <div className="flex items-center gap-0.5 text-sm">
            <MdOutlineCommentIcon className="h-5 w-5 text-neutral-800" />
            {new Intl.NumberFormat().format(commentCount)}
          </div>
        )}
        {typeof likeCount === 'number' && (
          <div className="flex items-center gap-0.5 text-sm">
            {isLikeActive ? (
              <GoHeartFillIcon className="h-5 w-5 text-neutral-800" />
            ) : (
              <GoHeartIcon className="h-5 w-5 text-neutral-800" />
            )}
            {new Intl.NumberFormat().format(likeCount)}
          </div>
        )}
      </div>
    </a>
  );
}
