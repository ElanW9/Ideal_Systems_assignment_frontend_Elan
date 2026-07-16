import { useState, useEffect } from 'react';
import PostSearchBar from '../components/PostSearchBar';
import PostsList from '../components/PostsList';
import type { Post } from '../api/posts';
import { getPosts } from '../api/posts';

export default function PostsOverview() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((error) => console.error(error));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="postsOverview">
      <PostSearchBar value={searchTerm} onChange={setSearchTerm} />
      <PostsList posts={filteredPosts} />
    </section>
  );
}