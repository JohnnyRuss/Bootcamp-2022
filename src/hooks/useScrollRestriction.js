import { useEffect } from 'react';

function useScrollRestriction(dependence) {
  useEffect(() => {
    if (!dependence) return;
    const body = document.querySelector('body');
    body.style.overflowY = 'hidden';

    return () => (body.style.overflowY = 'scroll');
  }, [dependence]);
}

export default useScrollRestriction;
