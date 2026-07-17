import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Post } from '../api/posts';
import { getPost } from '../api/posts';
import PostInfo from '../components/PostInfo';
import PostComments from '../components/PostComments';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const [post, setPost] = useState<Post>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) return;

    getPost(postId)
      .then(setPost)
      .catch((error) => console.error(error));
  }, [postId]);

  const closePostDetail = () => navigate('/');

  return (
    <div>
      <button onClick={() => closePostDetail()}>Close</button>
      {post && <PostInfo post={post} />}
      <PostComments postId={postId} />
    </div>
  );
}