import React from 'react';
import { useBookmarks } from '../../hooks/useBookmarks';

const BookmarkButton = ({ topicId, topicTitle }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const isBookmarked = bookmarks && bookmarks.includes(topicId);

  const handleToggle = () => {
    if (isBookmarked) {
      removeBookmark(topicId);
    } else {
      addBookmark(topicId, topicTitle);
    }
  };

  return (
    <button className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`} onClick={handleToggle}>
      {isBookmarked ? '⭐ Bookmarked' : '☆ Bookmark'}
    </button>
  );
};

export default BookmarkButton;
