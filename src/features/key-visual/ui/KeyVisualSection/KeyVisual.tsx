import { useEffect, useState } from 'react';

import { GoHeart as GoHeartIcon, GoHeartFill as GoHeartFillIcon } from 'react-icons/go';
import { MdOutlineComment as MdOutlineCommentIcon } from 'react-icons/md';

import { Button } from '@/shared/ui/button';

interface KeyVisualProps {
  category: string;
  categoryPath: string;
  commentCount?: number;
  date: string;
  isButtonVisible?: boolean;
  isGradientEnabled?: boolean;
  isLikeActive: boolean;
  likeCount: number | null;
  path: string;
  summary: string;
  thumbnailUrl: string;
  title: string;
  onCommentClick?: () => void;
  onLikeClick: () => void;
}

export function KeyVisual({
  category,
  categoryPath,
  commentCount,
  date,
  isButtonVisible,
  isGradientEnabled,
  isLikeActive,
  likeCount,
  path,
  summary,
  thumbnailUrl,
  title,
  onCommentClick: handleCommentClick,
  onLikeClick: handleLikeClick,
}: KeyVisualProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`relative h-[640px] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gray-900 before:opacity-50 ${
        isGradientEnabled ? 'key-visual-gradient' : ''
      }`}
      key={path}
      style={{
        backgroundImage: `url(${thumbnailUrl}), url(https://c.pxhere.com/photos/32/a0/bamboo_plant-108294.jpg!d)`,
      }}
    >
      {isMounted && (
        <div className="absolute top-1/2 left-1/2 mx-auto w-4/5 max-w-3xl min-w-80 -translate-x-1/2 -translate-y-1/2 p-6 text-white">
          <a
            className="text-base font-medium opacity-60 hover:text-white hover:opacity-100"
            href={categoryPath}
          >
            {category}
          </a>
          <div className="mt-2 text-4xl leading-[1.2] font-bold md:text-5xl">{title}</div>
          <p className="mt-4 text-lg leading-normal">{summary}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-stone-100 opacity-60">{date}</span>
            {typeof commentCount === 'number' && commentCount > 0 && (
              <div
                className={`flex items-center gap-0.5 text-sm leading-normal ${handleCommentClick === undefined ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={handleCommentClick}
              >
                <MdOutlineCommentIcon
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
                {new Intl.NumberFormat().format(commentCount)}
              </div>
            )}
            {typeof likeCount === 'number' && (
              <div
                className="flex cursor-pointer items-center gap-0.5 text-sm leading-normal"
                onClick={handleLikeClick}
              >
                {isLikeActive ? (
                  <GoHeartFillIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                ) : (
                  <GoHeartIcon
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                )}
                {new Intl.NumberFormat().format(likeCount)}
              </div>
            )}
          </div>
          {isButtonVisible && (
            <Button
              asChild
              className="mt-5"
              size="lg"
              variant="outline"
            >
              <a href={path}>내용 읽기</a>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
