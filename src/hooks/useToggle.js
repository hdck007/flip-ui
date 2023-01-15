import { useState, useCallback } from "react";

const useToggle = (initial = false) => {
  const [open, setOpen] = useState(initial);

  const toggle = useCallback(() => setOpen((prevBool) => !prevBool), []);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return { open, toggle, onOpen, onClose };
};

export default useToggle;
