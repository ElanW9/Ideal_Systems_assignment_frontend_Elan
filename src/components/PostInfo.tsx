import type { Post } from '../api/posts';

interface PostInfoProps {
  post: Post;
}

export default function PostInfo({ post }: PostInfoProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}