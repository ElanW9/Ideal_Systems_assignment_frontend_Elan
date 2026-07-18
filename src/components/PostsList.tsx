import { useNavigate } from 'react-router-dom';
import type { Post } from '../api/posts';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  const navigate = useNavigate();

  const viewPostDetail = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <section id="postsList">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <p>{post.title}</p>
            <button onClick={() => viewPostDetail(post.id)}>View</button>
          </li>
        ))}
      </ul>
    </section>
  );
}