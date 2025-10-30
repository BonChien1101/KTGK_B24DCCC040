import React, { useState } from 'react';
import { Post } from './types';

interface PostFormProps {
  initialPost?: Post;
  onSubmit: (post: Post) => void;
  onCancel: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialPost, onSubmit, onCancel }) => {
  const [post, setPost] = useState<Post>(
    initialPost || {
      id: '',
      title: '',
      author: '',
      thumbnailUrl: '',
      content: '',
      category: 'Công nghệ',
      createdAt: new Date().toISOString(),
    }
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (post.title.trim().length < 10) {
      newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự';
    }
    if (post.author.trim().length < 3) {
      newErrors.author = 'Tác giả phải có ít nhất 3 ký tự';
    }
    if (post.content.trim().length < 50) {
      newErrors.content = 'Nội dung phải có ít nhất 50 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(post);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tiêu đề:
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </label>
      <label>
        Tác giả:
        <input
          type="text"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
        {errors.author && <p className="error">{errors.author}</p>}
      </label>
      <label>
        URL ảnh thumbnail:
        <input
          type="text"
          name="thumbnailUrl"
          value={post.thumbnailUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Nội dung:
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          rows={10}
        />
        {errors.content && <p className="error">{errors.content}</p>}
      </label>
      <label>
        Thể loại:
        <select name="category" value={post.category} onChange={handleChange}>
          <option value="Công nghệ">Công nghệ</option>
          <option value="Du lịch">Du lịch</option>
          <option value="Ẩm thực">Ẩm thực</option>
          <option value="Đời sống">Đời sống</option>
          <option value="Khác">Khác</option>
        </select>
      </label>
      <button type="submit">Đăng bài</button>
      <button type="button" onClick={onCancel}>Hủy</button>
    </form>
  );
};

export default PostForm;