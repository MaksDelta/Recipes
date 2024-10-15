import React from 'react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  const pages = Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>Previous</button>
      {pages.map((p) => (
        <button key={p} onClick={() => onPageChange(p)}>{p}</button>
      ))}
      {totalPages > 7 && <span>…</span>}
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
