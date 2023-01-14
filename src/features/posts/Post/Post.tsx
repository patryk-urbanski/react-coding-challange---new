import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PostBody } from 'features/posts/PostBody/PostBody';

import { RootState } from 'app/store';

export interface PostProps {}

export const Post: React.FC<PostProps> = () => {
  // TODO: Get the ID from the router params (e.g. /posts/12 => 12) and get the
  // post from the Redux store that matches the ID to replace this test data.
  const params: {
    id: string | undefined;
  } = useParams();
  const { id } = params;
  console.log('params', useParams());
  const post = useSelector((state: RootState) =>
    state.posts.posts.find((post: any) => post.id === Number(id))
  );

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <PostBody text={post.body} />
    </div>
  ) : (
    <p>Post not found</p>
  );
};
