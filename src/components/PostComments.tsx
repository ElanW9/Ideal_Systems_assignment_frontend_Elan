import { useState, useEffect } from 'react';
import type { PostComments } from '../api/posts';
import { getPostComments } from '../api/posts';

interface PostCommentsProps {
  postId: number;
}

export default function PostComments({ postId }: PostCommentsProps) {
  const [comments, setComments] = useState<PostComments[]>([]);

  useEffect(() => {
    if (!postId) return;

    getPostComments(postId)
      .then(setComments)
      .catch((error) => console.error(error));
  }, [postId]);

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