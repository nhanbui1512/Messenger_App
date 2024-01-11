import React, { useRef, useEffect } from 'react';

const AutoScrollDown = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Cuộn xuống dưới cùng mỗi khi children thay đổi
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [children]);

  return (
    <div ref={containerRef} style={{ height: '100%', width: '100%', overflowY: 'scroll' }}>
      {children}
    </div>
  );
};

export default AutoScrollDown;
