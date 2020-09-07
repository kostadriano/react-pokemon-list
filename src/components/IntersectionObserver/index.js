import React, { useRef, useCallback, useEffect } from 'react';

const IntersectionObserverComponent = ({ children, handleIntersection }) => {
  const observerRef = useRef();

  const observer = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            handleIntersection && handleIntersection()

            observerRef.current = null
          }
        });
      }).observe(node);
    },
    [handleIntersection]
  )

  useEffect(() => {
    if (observerRef.current) {
      observer(observerRef.current)
    }
  }, [observer, observerRef])

  return (
    <div ref={observerRef}>
      {children}
    </div>
  );
}

export default IntersectionObserverComponent;
