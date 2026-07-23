import { useState, useEffect } from 'react';
import type { PostComments } from '../api/posts';
import { getPostComments } from '../api/posts';

interface PostCommentsProps {
  postId: number;
}

export default function PostComments({ postId }: PostCommentsProps) {
  const [comments, setComments] = useState<PostComments[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!postId) return;
    
    setLoading(true);
    getPostComments(postId)
      .then(setComments)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <span className="loader"></span>;

  return (
    <section id="postComments">
      <h2>Comments</h2>
        <ul>
        {comments.map((comment) => (
            <li key={comment.id}>
            <p>{comment.body}</p>
            </li>
        ))}
        </ul>
  </section>
  );
}