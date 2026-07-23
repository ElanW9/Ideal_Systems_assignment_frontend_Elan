import { useState, useEffect } from 'react';
import PostSearchBar from '../components/PostSearchBar';
import PostsList from '../components/PostsList';
import type { Post } from '../api/posts';
import { getPosts } from '../api/posts';

export default function PostsOverview() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then(setPosts)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) return <span className="loader"></span>;
  return (
    <section id="postsOverview" className="posts-overview-container">
      <PostSearchBar value={searchTerm} onChange={setSearchTerm} />
      <PostsList posts={filteredPosts} />
    </section>
  );
}