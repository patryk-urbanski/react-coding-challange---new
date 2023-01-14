import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from 'features/posts/postsSlice';
import { PostBody } from 'features/posts/PostBody/PostBody';

import { RootState } from 'app/store';

export interface PostsProps {}

export const Posts: React.FC<PostsProps> = () => {
  // TODO: Dispatch an action when this component is mounted that loads the post data.
  // TODO: Get the post data and loading state from the store instead of this test data.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const posts = useSelector((state: RootState) => state.posts.posts);
  const isLoading = useSelector((state: RootState) => state.posts.isLoading);

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <ul>
      {posts.map((post) => (
        <li key={post?.id}>
          <Link to={`/posts/${post?.id}`}>{post.title}</Link>
          <PostBody summary text={post.body} />
        </li>
      ))}
    </ul>
  );
};
