import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from './types';
import './PostDetail.css';

interface PostDetailProps {
  posts: Post[];
  onDelete: (id: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDelete }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Bài viết không tồn tại.</p>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>Tác giả: {post.author}</p>
      <p>Ngày đăng: {post.createdAt}</p>
      <img src={post.thumbnailUrl} alt={post.title} className="post-detail-thumbnail" />
      <p>{post.content}</p>
      <div className="post-detail-actions">
        <button onClick={() => navigate('/')}>Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button onClick={() => onDelete(post.id)}>Xóa bài viết</button>
      </div>
    </div>
  );
};

export default PostDetail;
