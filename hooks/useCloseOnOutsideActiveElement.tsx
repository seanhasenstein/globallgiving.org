import React from 'react';

export default function useCloseOnOutsideActiveElement(
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  containerRef: React.RefObject<HTMLElement>
) {
  React.useEffect(() => {
    const handleTabKeyup = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;

      if (e.key === 'Tab') {
        if (!containerRef.current?.contains(activeElement)) {
          setOpen(false);
        }
      }
    };

    if (open) {
      document.addEventListener('keyup', handleTabKeyup);
    }

    return () => {
      document.removeEventListener('keyup', handleTabKeyup);
    };
  }, [containerRef, open, setOpen]);
}
