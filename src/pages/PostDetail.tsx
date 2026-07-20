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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!postId) return;
    
    setLoading(true);
    getPost(postId)
      .then(setPost)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [postId]);

  const closePostDetail = () => navigate('/');

  if (loading) return <p>Loading post details...</p>;
  
  return (
    <div className="modal-overlay" onClick={closePostDetail}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closePostDetail}>Close</button>
        {post && <PostInfo post={post} />}
        {post &&<PostComments postId={postId} />}
      </div>
    </div>
  );
}