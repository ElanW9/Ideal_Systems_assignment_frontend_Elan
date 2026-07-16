import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Post } from '../api/posts';
import { getPost } from '../api/posts';
import PostInfo from '../components/PostInfo';
import PostComments from '../components/PostComments';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (!postId) return;

    getPost(postId)
      .then(setPost)
      .catch((error) => console.error(error));
  }, [postId]);

  return (
    <div>
      {post && <PostInfo post={post} />}
      <PostComments postId={postId} />
    </div>
  );
}