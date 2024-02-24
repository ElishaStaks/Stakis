import { useEffect } from 'react';

// Custom hook to manage body overflow
export const useBodyOverflow = (open: boolean) => {
  useEffect(() => {
    // Update the body overflow based on the 'open' state
    document.body.style.overflow = open ? 'hidden' : 'auto';

    // Cleanup the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);
};
