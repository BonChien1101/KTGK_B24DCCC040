import React from 'react';
import './PostCard.css';

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  thumbnailUrl: string;
  createdAt: string;
  description: string;
  onReadMore: (id: string) => void;
  onDelete: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  thumbnailUrl,
  createdAt,
  description,
  onReadMore,
  onDelete,
}) => {
  return (
    <div className="post-card">
      <img src={thumbnailUrl} alt={title} className="post-card-thumbnail" />
      <div className="post-card-content">
        <h3>{title}</h3>
        <p>Tác giả: {author}</p>
        <p>Ngày đăng: {createdAt}</p>
        <p>{description}</p>
        <div className="post-card-actions">
          <button onClick={() => onReadMore(id)}>Đọc thêm</button>
          <button onClick={() => onDelete(id)}>Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
