export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostComments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

/*Base URL (would normally put in a .env file)*/
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

/*Get all posts from API*/
export async function getPosts (): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    } else {
      return response.json();
    }
}

/*Get specific post from API*/
export async function getPost (id: number): Promise<Post> {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch post ${id}: ${response.status}`);
    } else {
      return response.json();
    }
}

/*Get comments for a specific post from API*/
export async function getPostComments(postId: string): Promise<PostComments[]> {
  const response = await fetch(`${BASE_URL}/${postId}/comments`);

  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ${postId}: ${response.status}`);
  } else {
    return response.json();
  }
}

