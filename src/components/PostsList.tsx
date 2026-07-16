import { useState, useEffect } from 'react';
import type { Post } from '../api/posts';
import { getPosts } from '../api/posts';


export default function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
       getPosts()
         .then(setPosts)
         .catch((error) => console.error(error));
    }, []);

  return (
    <section id="postsList">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p >{post.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}