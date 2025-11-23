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
        'group transition-bg mx-auto block cursor-pointer p-6 duration-200 ease-in-out md:flex md:gap-6 md:hover:rounded-2xl md:hover:bg-neutral-100',
        isLast && 'border-b-transparent',
      )}
      href={path}
    >
      <div className="h-56 w-full overflow-hidden rounded-xl md:h-auto md:w-64 md:shrink-0">
        <img
          aria-hidden="true"
          className="h-full w-full object-cover"
          src={thumbnailUrl}
        />
      </div>
      <div className="flex flex-1 flex-col md:justify-between">
        <div>
          <div className="mt-8 text-base font-medium text-stone-500 md:mt-0">{category}</div>
          <div
            className={classNames(
              'group-hover:text-primary mt-2 text-3xl leading-[1.2] font-bold transition-colors duration-300 ease-in-out md:text-4xl',
            )}
          >
            {title}
          </div>
          <p className="mt-4 font-normal text-neutral-600 transition-colors duration-200 ease-out group-hover:text-neutral-900 md:text-lg">
            {summary}
          </p>
        </div>
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
      </div>
    </a>
  );
}
