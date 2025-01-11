import { default as likeReactionDeleteMockData } from './__mocks__/fixtures/likeReaction.delete.json';
import { default as likeReactionPostMockData } from './__mocks__/fixtures/likeReaction.post.json';
import { default as reactionGetMockData } from './__mocks__/fixtures/reaction.get.json';
import type { TistoryResponse } from '@/shared/model';

interface ReactionGetResponse {
  success: boolean;
  code: number;
  message: string;
  reactionCounter: {
    sum: number;
    like: number;
    sad: number;
  };
  reactionActivated: string;
  isActive: boolean;
}

interface LikeReactionPostResponse {
  id: string;
  type: string;
  categoryId: number;
  meta: {
    serviceId: string;
    blogId: number;
    entryId: number;
  };
  reactionCounter: {
    sum: number;
    like: number;
    sad: number;
  };
  createdDate: string;
  updatedDate: string;
}

interface LikeReactionDeleteResponse {
  id: string;
  type: string;
  categoryId: number;
  meta: {
    serviceId: string;
    blogId: number;
    entryId: number;
  };
  reactionCounter: {
    sum: number;
    like: number;
    sad: number;
  };
  createdDate: string;
  updatedDate: string;
}

export async function getReaction(articleNo: number): Promise<TistoryResponse<ReactionGetResponse>> {
  if (process.env.NODE_ENV === 'development') {
    return reactionGetMockData;
  }

  try {
    const response = await fetch(`/reaction?entryId=${articleNo}`);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postLikeReaction(articleNo: number): Promise<TistoryResponse<LikeReactionPostResponse>> {
  if (process.env.NODE_ENV === 'development') {
    return likeReactionPostMockData;
  }

  try {
    const response = await fetch(`/reaction`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entryId: articleNo,
        reactionType: 'LIKE',
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteLikeReaction(articleNo: number): Promise<TistoryResponse<LikeReactionDeleteResponse>> {
  if (process.env.NODE_ENV === 'development') {
    return likeReactionDeleteMockData;
  }

  try {
    const response = await fetch(`/reaction`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        entryId: articleNo,
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
