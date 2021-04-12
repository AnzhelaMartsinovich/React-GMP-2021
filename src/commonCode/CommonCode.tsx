import React, { useEffect, useCallback } from 'react';

export const useCustomHook = (
  open: boolean,
  setOpen: (open: boolean) => void,
  closePanel?: () => void
) => {
  const handler = useCallback(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'initial');
  }, [open]);

  useEffect(() => {
    handler();
  }, [handler, open]);

  return () => {
    setOpen(!open);
    closePanel && closePanel();
  };
};
