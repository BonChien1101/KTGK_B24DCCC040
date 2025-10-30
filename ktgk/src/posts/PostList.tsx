import React from 'react';
import PostCard from './PostCard';
import { Post } from './types';
import './PostList.css';

interface PostListProps {
  posts: Post[];
  onReadMore: (id: string) => void;
  onDelete: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onReadMore, onDelete }) => {
  return (
    <div className="post-list">
      <h2>Danh sách bài viết</h2>
      <p>Tổng số bài viết: {posts.length}</p>
      <div className="post-list-grid">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            thumbnailUrl={post.thumbnailUrl}
            createdAt={post.createdAt}
            description={post.content.slice(0, 100) + '...'}
            onReadMore={onReadMore}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;
